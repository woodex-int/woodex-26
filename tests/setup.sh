#!/bin/sh
# Rebuild the browser-test harness after a sandbox reset (npm-only network path).
mkdir -p /home/user/.pwtest && cd /home/user/.pwtest
npm i playwright@latest @sparticuz/chromium --no-save 2>&1 | tail -1
node -e "const z=require('zlib'),f=require('fs');f.mkdirSync('/tmp/spartlibs',{recursive:true});f.writeFileSync('/tmp/al2023.tar',z.brotliDecompressSync(f.readFileSync('node_modules/@sparticuz/chromium/bin/al2023.tar.br')))"
tar -xf /tmp/al2023.tar -C /tmp/spartlibs
echo harness ready
