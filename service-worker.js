const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  './index.html',
  './',
  "./src/timeline.js",
  "./src/timeline.css",
  "./src/cycle.js",
  "./src/cycle.css",
  "./service-worker.js",
  './media/Carbon_cycle_main.mp4',
  "./media/INT3D-1/INT3D-1.0000.jpg",
  "./media/INT3D-1/INT3D-1.0017.jpg",
  "./media/INT3D-1/INT3D-1.0034.jpg",
  "./media/INT3D-1/INT3D-1.0051.jpg",
  "./media/INT3D-1/INT3D-1.0068.jpg",
  "./media/INT3D-1/INT3D-1.0085.jpg",
  "./media/INT3D-1/INT3D-1.0102.jpg",
  "./media/INT3D-1/INT3D-1.0119.jpg",
  "./media/INT3D-1/INT3D-1.0136.jpg",
  "./media/INT3D-1/INT3D-1.0001.jpg",
  "./media/INT3D-1/INT3D-1.0018.jpg",
  "./media/INT3D-1/INT3D-1.0035.jpg",
  "./media/INT3D-1/INT3D-1.0052.jpg",
  "./media/INT3D-1/INT3D-1.0069.jpg",
  "./media/INT3D-1/INT3D-1.0086.jpg",
  "./media/INT3D-1/INT3D-1.0103.jpg",
  "./media/INT3D-1/INT3D-1.0120.jpg",
  "./media/INT3D-1/INT3D-1.0137.jpg",
  "./media/INT3D-1/INT3D-1.0002.jpg",
  "./media/INT3D-1/INT3D-1.0019.jpg",
  "./media/INT3D-1/INT3D-1.0036.jpg",
  "./media/INT3D-1/INT3D-1.0053.jpg",
  "./media/INT3D-1/INT3D-1.0070.jpg",
  "./media/INT3D-1/INT3D-1.0087.jpg",
  "./media/INT3D-1/INT3D-1.0104.jpg",
  "./media/INT3D-1/INT3D-1.0121.jpg",
  "./media/INT3D-1/INT3D-1.0138.jpg",
  "./media/INT3D-1/INT3D-1.0003.jpg",
  "./media/INT3D-1/INT3D-1.0020.jpg",
  "./media/INT3D-1/INT3D-1.0037.jpg",
  "./media/INT3D-1/INT3D-1.0054.jpg",
  "./media/INT3D-1/INT3D-1.0071.jpg",
  "./media/INT3D-1/INT3D-1.0088.jpg",
  "./media/INT3D-1/INT3D-1.0105.jpg",
  "./media/INT3D-1/INT3D-1.0122.jpg",
  "./media/INT3D-1/INT3D-1.0139.jpg",
  "./media/INT3D-1/INT3D-1.0004.jpg",
  "./media/INT3D-1/INT3D-1.0021.jpg",
  "./media/INT3D-1/INT3D-1.0038.jpg",
  "./media/INT3D-1/INT3D-1.0055.jpg",
  "./media/INT3D-1/INT3D-1.0072.jpg",
  "./media/INT3D-1/INT3D-1.0089.jpg",
  "./media/INT3D-1/INT3D-1.0106.jpg",
  "./media/INT3D-1/INT3D-1.0123.jpg",
  "./media/INT3D-1/INT3D-1.0140.jpg",
  "./media/INT3D-1/INT3D-1.0005.jpg",
  "./media/INT3D-1/INT3D-1.0022.jpg",
  "./media/INT3D-1/INT3D-1.0039.jpg",
  "./media/INT3D-1/INT3D-1.0056.jpg",
  "./media/INT3D-1/INT3D-1.0073.jpg",
  "./media/INT3D-1/INT3D-1.0090.jpg",
  "./media/INT3D-1/INT3D-1.0107.jpg",
  "./media/INT3D-1/INT3D-1.0124.jpg",
  "./media/INT3D-1/INT3D-1.0141.jpg",
  "./media/INT3D-1/INT3D-1.0006.jpg",
  "./media/INT3D-1/INT3D-1.0023.jpg",
  "./media/INT3D-1/INT3D-1.0040.jpg",
  "./media/INT3D-1/INT3D-1.0057.jpg",
  "./media/INT3D-1/INT3D-1.0074.jpg",
  "./media/INT3D-1/INT3D-1.0091.jpg",
  "./media/INT3D-1/INT3D-1.0108.jpg",
  "./media/INT3D-1/INT3D-1.0125.jpg",
  "./media/INT3D-1/INT3D-1.0142.jpg",
  "./media/INT3D-1/INT3D-1.0007.jpg",
  "./media/INT3D-1/INT3D-1.0024.jpg",
  "./media/INT3D-1/INT3D-1.0041.jpg",
  "./media/INT3D-1/INT3D-1.0058.jpg",
  "./media/INT3D-1/INT3D-1.0075.jpg",
  "./media/INT3D-1/INT3D-1.0092.jpg",
  "./media/INT3D-1/INT3D-1.0109.jpg",
  "./media/INT3D-1/INT3D-1.0126.jpg",
  "./media/INT3D-1/INT3D-1.0143.jpg",
  "./media/INT3D-1/INT3D-1.0008.jpg",
  "./media/INT3D-1/INT3D-1.0025.jpg",
  "./media/INT3D-1/INT3D-1.0042.jpg",
  "./media/INT3D-1/INT3D-1.0059.jpg",
  "./media/INT3D-1/INT3D-1.0076.jpg",
  "./media/INT3D-1/INT3D-1.0093.jpg",
  "./media/INT3D-1/INT3D-1.0110.jpg",
  "./media/INT3D-1/INT3D-1.0127.jpg",
  "./media/INT3D-1/INT3D-1.0144.jpg",
  "./media/INT3D-1/INT3D-1.0009.jpg",
  "./media/INT3D-1/INT3D-1.0026.jpg",
  "./media/INT3D-1/INT3D-1.0043.jpg",
  "./media/INT3D-1/INT3D-1.0060.jpg",
  "./media/INT3D-1/INT3D-1.0077.jpg",
  "./media/INT3D-1/INT3D-1.0094.jpg",
  "./media/INT3D-1/INT3D-1.0111.jpg",
  "./media/INT3D-1/INT3D-1.0128.jpg",
  "./media/INT3D-1/INT3D-1.0145.jpg",
  "./media/INT3D-1/INT3D-1.0010.jpg",
  "./media/INT3D-1/INT3D-1.0027.jpg",
  "./media/INT3D-1/INT3D-1.0044.jpg",
  "./media/INT3D-1/INT3D-1.0061.jpg",
  "./media/INT3D-1/INT3D-1.0078.jpg",
  "./media/INT3D-1/INT3D-1.0095.jpg",
  "./media/INT3D-1/INT3D-1.0112.jpg",
  "./media/INT3D-1/INT3D-1.0129.jpg",
  "./media/INT3D-1/INT3D-1.0146.jpg",
  "./media/INT3D-1/INT3D-1.0011.jpg",
  "./media/INT3D-1/INT3D-1.0028.jpg",
  "./media/INT3D-1/INT3D-1.0045.jpg",
  "./media/INT3D-1/INT3D-1.0062.jpg",
  "./media/INT3D-1/INT3D-1.0079.jpg",
  "./media/INT3D-1/INT3D-1.0096.jpg",
  "./media/INT3D-1/INT3D-1.0113.jpg",
  "./media/INT3D-1/INT3D-1.0130.jpg",
  "./media/INT3D-1/INT3D-1.0147.jpg",
  "./media/INT3D-1/INT3D-1.0012.jpg",
  "./media/INT3D-1/INT3D-1.0029.jpg",
  "./media/INT3D-1/INT3D-1.0046.jpg",
  "./media/INT3D-1/INT3D-1.0063.jpg",
  "./media/INT3D-1/INT3D-1.0080.jpg",
  "./media/INT3D-1/INT3D-1.0097.jpg",
  "./media/INT3D-1/INT3D-1.0114.jpg",
  "./media/INT3D-1/INT3D-1.0131.jpg",
  "./media/INT3D-1/INT3D-1.0148.jpg",
  "./media/INT3D-1/INT3D-1.0013.jpg",
  "./media/INT3D-1/INT3D-1.0030.jpg",
  "./media/INT3D-1/INT3D-1.0047.jpg",
  "./media/INT3D-1/INT3D-1.0064.jpg",
  "./media/INT3D-1/INT3D-1.0081.jpg",
  "./media/INT3D-1/INT3D-1.0098.jpg",
  "./media/INT3D-1/INT3D-1.0115.jpg",
  "./media/INT3D-1/INT3D-1.0132.jpg",
  "./media/INT3D-1/INT3D-1.0149.jpg",
  "./media/INT3D-1/INT3D-1.0014.jpg",
  "./media/INT3D-1/INT3D-1.0031.jpg",
  "./media/INT3D-1/INT3D-1.0048.jpg",
  "./media/INT3D-1/INT3D-1.0065.jpg",
  "./media/INT3D-1/INT3D-1.0082.jpg",
  "./media/INT3D-1/INT3D-1.0099.jpg",
  "./media/INT3D-1/INT3D-1.0116.jpg",
  "./media/INT3D-1/INT3D-1.0133.jpg",
  "./media/INT3D-1/INT3D-1.0150.jpg",
  "./media/INT3D-1/INT3D-1.0015.jpg",
  "./media/INT3D-1/INT3D-1.0032.jpg",
  "./media/INT3D-1/INT3D-1.0049.jpg",
  "./media/INT3D-1/INT3D-1.0066.jpg",
  "./media/INT3D-1/INT3D-1.0083.jpg",
  "./media/INT3D-1/INT3D-1.0100.jpg",
  "./media/INT3D-1/INT3D-1.0117.jpg",
  "./media/INT3D-1/INT3D-1.0134.jpg",
  "./media/INT3D-1/INT3D-1.0151.jpg",
  "./media/INT3D-1/INT3D-1.0016.jpg",
  "./media/INT3D-1/INT3D-1.0033.jpg",
  "./media/INT3D-1/INT3D-1.0050.jpg",
  "./media/INT3D-1/INT3D-1.0067.jpg",
  "./media/INT3D-1/INT3D-1.0084.jpg",
  "./media/INT3D-1/INT3D-1.0101.jpg",
  "./media/INT3D-1/INT3D-1.0118.jpg",
  "./media/INT3D-1/INT3D-1.0135.jpg",
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
