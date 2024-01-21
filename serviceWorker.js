const staticLafay = "dev-lafay-site-v1"
const assets = [
  "/",
  "/index.html",
  "/cardio.html",
  "/notes.html",
  "/stretching.html",
  "/workout.html",
  "/css/base.css",
  "/css/home.css",
  "/css/index.css",
  "/css/reset.css",
  "/css/stretching.css",
  "/css/timer.css",
  "/js/app.js",
  "/js/stretching.js",
  "/js/workout.js",
  "/img/stretching/1.png",
  "/img/stretching/2.png",
  "/img/stretching/3.png",
  "/img/stretching/4.png",
  "/img/stretching/5.png",
  "/img/stretching/6.png",
  "/img/stretching/7.png",
  "/img/stretching/8.png",
  "/img/stretching/9.png",
  "/img/stretching/10.png",
  "/img/stretching/11.png",
  "/img/stretching/12.png",
  "/img/stretching/13.png",
  "/img/stretching/14.png",
  "/img/stretching/15.png",
  "/img/stretching/16.png",
  "/img/stretching/17.png",
  "/img/stretching/18.png",
  "/img/stretching/19.png",
  "/img/stretching/20.png",
  "/img/stretching/21.png",
  "/img/stretching/22.png",
  "/img/stretching/23.png",
  "/img/stretching/24.png",
  "/img/stretching/25.png",
  "/img/stretching/26.png",
  "/img/stretching/27.png",
  "/img/stretching/28.png",
  "/img/stretching/29.png",
  "/img/stretching/30.png",
  "/img/stretching/31.png",
  "/img/stretching/32.png",
  "/img/stretching/33.png",
  "/img/stretching/34.png",
  "/img/stretching/35.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLafay).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
      })
    );
  });