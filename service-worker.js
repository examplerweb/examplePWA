const CACHE_NAME = 'navecitas-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/phaser.js',
  '/mainAndroid.js',
  '/assets/music.mp3',
  '/assets/sky.png',
  '/assets/ship.png',
  '/assets/robot.png',
  '/assets/bullet.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
