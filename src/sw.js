const CACHE_NAME = new Date().getTime().toString();
const { assets } = global.serviceWorkerOption;

const assetsToCache = assets.map(path => new URL(path, global.location).toString());
assetsToCache.push('/');

self.addEventListener('install', (event) => {
  self.skipWaiting();

  console.log(`[SW] - ${CACHE_NAME} has just Installed`);
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(assetsToCache))
    .catch(e => console.log(e)));
});

self.addEventListener('activate', (event) => {
  console.log('[SW] - has just activated!');
  event.waitUntil(caches.keys().then((cacheNames) => {
    return Promise.all(cacheNames.map((cacheName) => {
      if (cacheName.indexOf(CACHE_NAME) === 0) {
        return null;
      }
      console.log(`[SW] - Old '${cacheName}' has been deleted!`);
      return caches.delete(cacheName);
    }));
  }));
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // const requestUrl = new URL(request.url);
  const generalError = new Response('', {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });

  event.respondWith(caches.match(request).then((response) => {
    if (response) {
      // console.log(`[SW] - Fetch URL ${requestUrl.href} from cache`);
      return response;
    }

    // console.log(`[SW] URL ${requestUrl.href} fetched`);
    return fetch(request).then(d => d).catch(() => generalError);
  }));
});
