const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/cis-youth-hymnal-v2/",
      "/cis-youth-hymnal-v2/js/script.js",
      "/cis-youth-hymnal-v2/hymns/1/",
      "/cis-youth-hymnal-v2/hymns/10/",
      "/cis-youth-hymnal-v2/hymns/151/",
      "/cis-youth-hymnal-v2/hymns/155/",
      "/cis-youth-hymnal-v2/hymns/161/",
      "/cis-youth-hymnal-v2/hymns/200/",
      "/cis-youth-hymnal-v2/hymns/265/",
      "/cis-youth-hymnal-v2/hymns/276/",
      "/cis-youth-hymnal-v2/hymns/278/",
      "/cis-youth-hymnal-v2/hymns/282/",
      "/cis-youth-hymnal-v2/hymns/296/",
      "/cis-youth-hymnal-v2/hymns/297/",
      "/cis-youth-hymnal-v2/hymns/3/",
      "/cis-youth-hymnal-v2/hymns/309/",
      "/cis-youth-hymnal-v2/hymns/31/",
      "/cis-youth-hymnal-v2/hymns/311/",
      "/cis-youth-hymnal-v2/hymns/32/",
      "/cis-youth-hymnal-v2/hymns/58/",
      "/cis-youth-hymnal-v2/hymns/66/",
      "/cis-youth-hymnal-v2/hymns/69/",
      "/cis-youth-hymnal-v2/hymns/81/",
      "/cis-youth-hymnal-v2/hymns/99/",
    ])
  );
});