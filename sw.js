// importScripts('/cache-polyfill.js');


// self.addEventListener('install', function(e) {
//  e.waitUntil(
//    caches.open('airhorner').then(function(cache) {
//      return cache.addAll([
//        '/',
//        '/index.html',
//        '/index.html?homescreen=1',
//        '/?homescreen=1',
//        '/styles/main.css',
//        '/scripts/main.min.js',
//        '/sounds/airhorn.mp3'
//      ]);
//    })
//  );
// });

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });

importScripts('serviceworker-cache-polyfill.js');

// example usage:
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('demo-cache').then(function(cache) {
      return cache.put('/', new Response("From the cache!"));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});