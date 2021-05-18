const samPWA = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/bootstrap.css",
  "/css/bootstrap.min.css",
  "/css/pricing.css",
  "/js/app.js",
  "/images/pwalogo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(samPWA).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })