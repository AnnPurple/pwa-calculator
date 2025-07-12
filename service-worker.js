const CACHE_NAME = 'calculator-cache-v2';

const urlsToCache = [
  '/pwa-calculator/',
  '/pwa-calculator/index.html',
  '/pwa-calculator/style.css',
  '/pwa-calculator/script.js',
  '/pwa-calculator/manifest.json',
  // Optional: add icon paths if you used real icons
];

// Install and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Serve files from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
