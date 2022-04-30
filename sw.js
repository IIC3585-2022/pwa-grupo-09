let cacheName = 'hello-pwa'; // Name of offline cache
// List of files to be cached
let filesToCache = [
  '/',                // caches index even if the user don't type index.html 
  '/index.html',
  '/css/style.css',
  '/js/main.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});