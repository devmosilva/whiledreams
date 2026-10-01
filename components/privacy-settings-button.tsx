"use client";

export function PrivacySettingsButton() {
  return <button type="button" className="privacy-settings-button" onClick={() => window.dispatchEvent(new Event("wd:privacy-settings"))}>Alterar preferência de métricas</button>;
}
