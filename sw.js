self.addEventListener('install', (evt) => {
    console.log('Service Worker is registered');
});

self.addEventListener('activate', (evt) => {
    console.log('Service Worker is activated');
});

self.addEventListener('fetch', (evt) => {
    console.log('Service Worker is fetching');
});