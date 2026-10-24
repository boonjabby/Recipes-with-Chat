const CACHE_PREFIX='recipes-with-chat-';
const CACHE=CACHE_PREFIX+'collection-v5';
const FILES=['./','./index.html','./recipe.html','./collection.js','./recipe.js','./recipe-store.js','./app.css','./recipes.json','./fallow-chicken.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;}
  catch{
   const cached=await cache.match(event.request);if(cached)return cached;
   const base=new URL(self.registration.scope);
   if(url.pathname===new URL('recipe.html',base).pathname||url.pathname===new URL('recipe',base).pathname)return await cache.match('./recipe.html')||Response.error();
   if(url.pathname===new URL('fallow-chicken',base).pathname)return await cache.match('./fallow-chicken.html')||Response.error();
   if(event.request.mode==='navigate')return await cache.match('./index.html')||Response.error();
   return Response.error();
  }
 })());
});
