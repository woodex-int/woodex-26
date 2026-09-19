// shared launcher — harness node_modules lives at /home/user/.pwtest (rebuilt by setup.sh)
import { createRequire } from 'module';
const require = createRequire('/home/user/.pwtest/');
const { chromium } = require('playwright');
const sparticuz = require('@sparticuz/chromium');
const EXE = await Promise.resolve((sparticuz.default || sparticuz).executablePath());
export async function launch(viewport) {
  const browser = await chromium.launch({ executablePath: EXE, env: { ...process.env, LD_LIBRARY_PATH: '/tmp/spartlibs/lib' }, args: ['--no-sandbox','--disable-gpu','--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport });
  return { browser, page };
}
