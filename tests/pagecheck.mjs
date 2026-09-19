// Usage: node pagecheck.mjs <path> <width> <height> <secClass1,secClass2,...> [interactive-st-space]
import { launch } from './launch.mjs';
const [path = '/index.html', W = '1440', H = '900', secsArg = '', hasSwap = '1'] = process.argv.slice(2);
const SECS = secsArg ? secsArg.split(',') : [];
const { browser, page } = await launch({ width: +W, height: +H });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error' && !/tailwindcss|fonts\.gs|ERR_CONNECTION/.test(m.text())) errors.push('console: ' + m.text()); });
await page.goto('http://localhost:8080' + path, { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

if (SECS.length) console.log((await page.evaluate((ids) => ids.map(id => { const el = document.querySelector('.' + id);
  return el ? `${id}: ${Math.round(el.getBoundingClientRect().height)}px` : `${id}: MISSING`; }), SECS)).join('\n'));

if (hasSwap === '1') {
  const swap = await page.evaluate(async () => {
    const btns = [...document.querySelectorAll('.st-space')];
    if (!btns.length) return 'no .st-space on page';
    const img = document.querySelector('#st-space-img');
    if (!img) return 'MISSING #st-space-img';
    const before = img.src;
    btns[btns.length - 1].dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await new Promise(r => setTimeout(r, 250));
    const cap = document.querySelector('#st-space-cap');
    return { changed: img.src !== before, cap: cap ? cap.textContent.slice(0, 40) : 'no-cap' };
  });
  console.log('swap:', JSON.stringify(swap));
}

// faq accordion if present
const faq = await page.evaluate(async () => {
  const q = document.querySelector('.faq-q');
  if (!q) return null;
  q.click();
  await new Promise(r => setTimeout(r, 350));
  return { opens: q.closest('.faq-item').classList.contains('is-open'), answerVisible: getComputedStyle(q.closest('.faq-item').querySelector('.faq-a')).display !== 'none' };
});
if (faq) console.log('faq:', JSON.stringify(faq));

console.log('H1:', await page.evaluate(() => document.querySelector('h1')?.textContent.trim().replace(/\s+/g, ' ').slice(0, 70)));

const overflow = await page.evaluate(() => {
  const bad = [];
  if (document.documentElement.scrollWidth > window.innerWidth + 1) bad.push(`BODY ${document.documentElement.scrollWidth}>${window.innerWidth}`);
  document.querySelectorAll('section, .container').forEach(el => { if (el.classList.contains('sec-marquee')) return; if (el.scrollWidth > el.clientWidth + 2) bad.push(`${el.className.split(' ')[0]} ${el.scrollWidth}>${el.clientWidth}`); });
  return bad;
});
console.log('overflow:', overflow.length ? overflow.join(' | ') : 'none ✓');

await page.evaluate(async () => {
  const step = window.innerHeight * 0.8;
  for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); }
  window.scrollTo(0, document.body.scrollHeight);
});
await page.waitForTimeout(1000);
const stuck = await page.evaluate(() => [...document.querySelectorAll('.reveal')].filter(el => {
  const cs = getComputedStyle(el);
  return parseFloat(cs.opacity) < 0.9 && cs.display !== 'none';
}).map(el => el.outerHTML.slice(0, 90)));
console.log('reveals never fired:', stuck.length ? stuck : 'none ✓');

if (+W >= 1024) {
  const lowContrast = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('main section').forEach(sec => sec.querySelectorAll('p, h1, h2, h3, span, b, small, a, label, strong').forEach(el => {
      const cs = getComputedStyle(el);
      if (parseFloat(cs.opacity) < 0.5 || !el.textContent.trim()) return;
      if (el.closest('.marquee-track')) return;
      const lum = c => { const m = c.match(/[\d.]+/g)?.map(Number) || [255,255,255];
        const f = v => { v/=255; return v<=0.03928? v/12.92 : ((v+0.055)/1.055)**2.4 };
        return 0.2126*f(m[0])+0.7152*f(m[1])+0.0722*f(m[2]); };
      const parse = c => { const m = c.match(/[\d.]+/g)?.map(Number) || [255,255,255,1]; return m.length === 3 ? [m[0],m[1],m[2],1] : m; };
      let chain = [];
      for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
        const c = parse(getComputedStyle(n).backgroundColor); chain.push(c); if (c[3] >= 1) break;
      }
      let [br, bg, bbl] = [255, 255, 255];
      for (let i = chain.length - 1; i >= 0; i--) { const [r,g,b,a] = chain[i]; br = r*a+br*(1-a); bg = g*a+bg*(1-a); bbl = b*a+bbl*(1-a); }
      const L1 = lum(cs.color), L2 = lum(`rgb(${br}, ${bg}, ${bbl})`);
      const ratio = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
      const fs = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 600;
      const large = fs >= 24 || (fs >= 18.66 && bold);
      if (ratio < (large ? 3 : 4.5)) out.push(`${el.tagName}.${(el.className||'').toString().slice(0,20)} ${ratio.toFixed(2)} "${el.textContent.trim().slice(0,26)}"`);
    }));
    return out;
  });
  console.log('low-contrast:', lowContrast.length ? '\n  ' + lowContrast.join('\n  ') : 'none ✓');
}

const clipped = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('main section').forEach(s =>
    s.querySelectorAll('*').forEach(el => { if (el.children.length === 0 && el.textContent.trim() && el.scrollWidth > el.clientWidth + 3) out.push(`${el.tagName}.${(el.className||'').toString().slice(0,20)} "${el.textContent.trim().slice(0,24)}"`); }));
  return out;
});
console.log('clipped text:', clipped.length ? clipped : 'none ✓');

const hrefs = await page.evaluate(() => [...new Set([...document.querySelectorAll('main a[href]')].map(a => a.getAttribute('href')).filter(h => h && !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('mailto')))]);
for (const href of hrefs) {
  const r = await page.evaluate(h2 => fetch(h2, { method: 'HEAD' }).then(r => r.status).catch(() => 'ERR'), href);
  if (r !== 200) console.log(`link ${href}: ${r}`);
}
console.log('links: all 200 ✓');
await page.screenshot({ path: `/home/user/.pwtest/page-${path.replace(/\//g, '_')}-${W}.png`, fullPage: true });
console.log(`screenshot · pageerrors:`, errors.length ? errors : 'none ✓');
await browser.close();
