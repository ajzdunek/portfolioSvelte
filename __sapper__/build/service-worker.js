!function(){"use strict";const e=["/client/index.5935ffa2.js","/client/projects.ab2b1f7c.js","/client/thanks.9d817a7d.js","/client/index.d9c14598.js","/client/[slug].acd367fd.js","/client/contact.9a969b04.js","/client/client.3ebc9c96.js"].concat(["/service-worker-index.html","/.DS_Store","/coding-video.mp4","/favicon.png","/global.css","/images/.DS_Store","/images/az-sound.png","/images/dev-recruit.png","/images/elementaj-website.png","/images/industrial-steels.png","/images/music404.png","/images/silver-sail.png","/images/sonic-pi-web-logo.png","/images/space-shooter.png","/images/wasted-wish.png","/logo-192.png","/logo-512.png","/manifest.json","/svelte-favicon.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1598302341818").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1598302341818"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1598302341818").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
