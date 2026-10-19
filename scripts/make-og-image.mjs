// One-off helper: renders public/og-image.png (1200x630) with headless Chromium.
// Run manually when branding or contact details change: node scripts/make-og-image.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logo = `data:image/png;base64,${fs.readFileSync(path.join(root, 'public/brands/jp-logo.png')).toString('base64')}`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{background:#0B1B2B;color:#F8F6F0;font-family:Inter,system-ui,sans-serif;position:relative}
  .glow{position:absolute;right:-180px;top:-180px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(200,119,46,.35),rgba(200,119,46,0) 70%)}
  .glow2{position:absolute;left:-200px;bottom:-260px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(43,183,166,.28),rgba(43,183,166,0) 70%)}
  .card{position:absolute;inset:0;padding:70px 80px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:22px}
  .brand img{width:88px;height:88px;border-radius:18px;background:#fff;padding:8px;box-sizing:border-box}
  .name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:40px;letter-spacing:.5px}
  .name .o{color:#E8641B}
  .cats{font-size:17px;letter-spacing:3px;color:rgba(248,246,240,.7);margin-top:4px}
  h1{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:58px;line-height:1.1;margin:0;max-width:980px}
  h1 span{color:#E59850}
  .sub{font-size:26px;color:rgba(248,246,240,.82);margin-top:18px;max-width:900px;line-height:1.35}
  .foot{display:flex;justify-content:space-between;align-items:flex-end;font-size:22px;color:rgba(248,246,240,.85)}
  .pill{background:#2BB7A6;color:#06372F;font-weight:600;padding:12px 22px;border-radius:999px;font-size:22px}
</style></head><body>
<div class="glow"></div><div class="glow2"></div>
<div class="card">
  <div class="brand"><img src="${logo}"><div><div class="name">JP <span class="o">PRO</span> SUPPLY</div><div class="cats">ELECTRICAL &nbsp;|&nbsp; PLUMBING &nbsp;|&nbsp; HOME AUTOMATION</div></div></div>
  <div><h1>Electrical, Plumbing &amp; Home Automation Material <span>Across Gurgaon &amp; NCR</span></h1>
  <div class="sub">BOQ-matched quotes at trade rates · Authorised brands · Site delivery for flats, contractors and builders</div></div>
  <div class="foot"><div>Sector 52, Gurugram &nbsp;·&nbsp; www.jpprosupply.com</div><div class="pill">WhatsApp +91 93107 65871</div></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public/og-image.png'), type: 'png' });
await browser.close();
console.log('wrote public/og-image.png');
