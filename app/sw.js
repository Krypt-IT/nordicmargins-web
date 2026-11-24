/* Marginal service worker – gör att appen startar utan täckning */
const CACHE='marginal-v5';
const SHELL=['/app/','/app/index.html','/app/manifest.json','/app/icon-192.png','/app/icon-512.png','/app/villkor.html','/app/integritet.html','/app/terms.html','/app/privacy.html'];
const CDN=['https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js','https://unpkg.com/@zxing/library@0.21.3/umd/index.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(SHELL);await Promise.allSettled(CDN.map(u=>c.add(u)))}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.hostname.endsWith('supabase.co'))return; // data går alltid direkt till servern
  if(r.mode==='navigate'||(u.origin===location.origin&&u.pathname.startsWith('/app/'))){
    e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})
      .catch(()=>caches.match(r).then(m=>m||caches.match('/app/index.html'))));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})));
});
