"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { PostHog } from "posthog-js";

const consentKey = "wd-analytics-consent";
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
let pixelsLoaded = false;

function loadScript(src: string) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadOptionalPixels() {
  if (pixelsLoaded) return;
  pixelsLoaded = true;
  if (gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId)) {
    const gtmWindow = window as typeof window & { dataLayer?: unknown[] };
    gtmWindow.dataLayer = gtmWindow.dataLayer ?? [];
    gtmWindow.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
  }

  if (metaPixelId && /^\d+$/.test(metaPixelId)) {
    // A opção fica preparada, mas só executa após consentimento explícito.
    const pixel = document.createElement("script");
    pixel.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`;
    document.head.appendChild(pixel);
  }
}

export function AnalyticsConsent() {
  const choice = useSyncExternalStore(
    (listener) => {
      window.addEventListener("storage", listener);
      window.addEventListener("wd:consent-change", listener);
      return () => {
        window.removeEventListener("storage", listener);
        window.removeEventListener("wd:consent-change", listener);
      };
    },
    () => localStorage.getItem(consentKey),
    () => null,
  );
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const reopen = () => setEditing(true);
    window.addEventListener("wd:privacy-settings", reopen);
    return () => window.removeEventListener("wd:privacy-settings", reopen);
  }, []);

  useEffect(() => {
    if (choice !== "yes") return;
    let active = true;
    let posthog: PostHog | undefined;

    const onCustomEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ event: string }>).detail;
      if (detail?.event) posthog?.capture(detail.event);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLElement>("[data-analytics]");
      if (link?.dataset.analytics) posthog?.capture(link.dataset.analytics, { label: link.textContent?.trim().slice(0, 80) });
    };

    window.addEventListener("wd:analytics", onCustomEvent);
    document.addEventListener("click", onClick);
    loadOptionalPixels();

    if (posthogKey) {
      import("posthog-js").then(({ default: instance }) => {
        if (!active) return;
        posthog = instance;
        instance.init(posthogKey, {
          api_host: posthogHost,
          autocapture: false,
          capture_pageview: false,
          capture_pageleave: false,
          disable_session_recording: true,
          person_profiles: "identified_only",
        });
        instance.capture("page_view", { path: window.location.pathname });
      });
    }

    return () => {
      active = false;
      window.removeEventListener("wd:analytics", onCustomEvent);
      document.removeEventListener("click", onClick);
    };
  }, [choice]);

  function choose(value: "yes" | "no") {
    const previous = localStorage.getItem(consentKey);
    localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event("wd:consent-change"));
    setEditing(false);
    if (previous === "yes" && value === "no") {
      window.location.reload();
      return;
    }
  }

  if ((choice === "yes" || choice === "no") && !editing) return null;
  return (
    <aside className="consent-banner" aria-label="Preferências de privacidade">
      <p><strong>Privacidade em primeiro lugar.</strong> Com sua autorização, usamos métricas para entender a visita e melhorar o site. <a href="/privacidade">Saiba mais</a>.</p>
      <div><button type="button" onClick={() => choose("no")}>Recusar</button><button type="button" onClick={() => choose("yes")}>Aceitar métricas</button></div>
    </aside>
  );
}
