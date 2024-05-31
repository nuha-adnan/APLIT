self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/src/style.css",
        "/src/script.js",
        "/src/icon.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
