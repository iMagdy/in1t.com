importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {

  workbox.core.setCacheNameDetails({
    prefix: 'in1t',
    suffix: 'v1'
  })

  // precahe webpack assets
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  // enable offline google analytics:
  workbox.googleAnalytics.initialize();

  const cacheDuration = new workbox.expiration.Plugin({
    // Cache only 20 items
    maxEntries: 20,
    // Cache for a maximum of a week
    maxAgeSeconds: 7 * 24 * 60 * 60,
  })
  
  // cache CSS and JS
  // workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate({
  //     cacheName: 'static-resources',
  //     plugins: [ cacheDuration ]
  //   })
  // )

  // Cache image files
  workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [ cacheDuration ]
    })
  )
  
  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  )

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        cacheDuration
      ],
    })
  )
}