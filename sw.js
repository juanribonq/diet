const CACHE_NAME = 'dieta-v2';
const urlsToCache = [
    './',
    './index.html',
    './diet-data.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // Clone and cache
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            }).catch(() => {
                // Offline fallback
                return caches.match('./index.html');
            })
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    console.log('Notification clicked:', event.notification.title);
    event.notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                const urlToOpen = event.notification.data?.url || self.location.origin;

                // If app is already open, focus it
                for (let client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        return client.focus();
                    }
                }

                // Otherwise, open a new window
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});

// Handle push events (for future push notification support)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'Nueva notificación de tu dieta',
        icon: './icon-192.svg',
        badge: './icon-192.svg',
        vibrate: [200, 100, 200],
        data: {
            url: self.location.origin
        }
    };

    event.waitUntil(
        self.registration.showNotification('Mi Dieta 5 Días', options)
    );
});
