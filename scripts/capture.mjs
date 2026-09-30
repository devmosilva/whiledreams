import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const [output = ".impeccable/review/hero-repro.png", width = "1672", height = "941", fullPage = "false"] = process.argv.slice(2);

await mkdir(new URL("../.impeccable/review/", import.meta.url), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
  deviceScaleFactor: 1,
});

await page.goto("http://127.0.0.1:3000", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1_000);
await page.screenshot({ path: output, fullPage: fullPage === "true" });
await browser.close();
