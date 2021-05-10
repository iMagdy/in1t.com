const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
const OFFLINE_URL = '/offline.html';
const STYLESHEET = '/in1t.css';
const PDF_RESUME = '/Islam-Magdy-Resume.pdf';
const IMAGES = [
  '/images/icons/apple-touch-icon-57x57.png',
  '/images/icons/apple-touch-icon-114x114.png',
  '/images/icons/apple-touch-icon-72x72.png',
  '/images/icons/apple-touch-icon-144x144.png',
  '/images/icons/apple-touch-icon-60x60.png',
  '/images/icons/apple-touch-icon-120x120.png',
  '/images/icons/apple-touch-icon-76x76.png',
  '/images/icons/apple-touch-icon-152x152.png',
  '/images/icons/favicon-196x196.png',
  '/images/icons/favicon-96x96.png',
  '/images/icons/favicon-32x32.png',
  '/images/icons/favicon-16x16.png',
  '/images/icons/mstile-144x144.png',
  '/images/icons/mstile-70x70.png',
  '/images/icons/mstile-150x150.png',
  '/images/icons/mstile-310x150.png',
  '/images/icons/mstile-310x310.png',
  '/images/icons/pdf/apple-touch-icon-120x120.png',
  '/images/icons/pdf/apple-touch-icon-152x152.png',
  '/images/icons/pdf/favicon-196x196.png',
  '/images/icons/pdf/favicon-96x96.png',
  '/images/icons/pdf/favicon-32x32.png',
  '/images/icons/pdf/favicon-16x16.png',
  '/images/icons/pdf/mstile-144x144.png',
  '/images/icons/pdf/mstile-70x70.png',
  '/images/icons/pdf/mstile-150x150.png',
  '/images/icons/pdf/mstile-310x150.png',
  '/images/icons/pdf/mstile-310x310.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      await cache.add(new Request(STYLESHEET, { cache: 'reload' }));
      await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      await cache.add(new Request(PDF_RESUME, { cache: 'reload' }));
      await Promise.all(IMAGES.map(image => cache.add(new Request(image, { cache: 'reload' }))));
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is likely
          // due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }

  // Cache Google fonts
  else if (/fonts.(googleapis|gstatic).com/.test(event.request.url)) {
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      let response = await cache.match(event.request.url);
      if(!response) {
        response = await fetch(event.request);
      }
      cache.put(event.request.url, response.clone());
    })()
  }
});