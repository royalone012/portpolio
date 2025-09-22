'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9288372d0c50adc2dc3d6c5723b78c96",
"assets/AssetManifest.bin.json": "b3f577bb882b9ca2cee2a258bead9ab4",
"assets/AssetManifest.json": "93486479c00a3b351c23d34e8f9b3d2f",
"assets/assets/images/avatar.png": "354ece103ff01591b00617361dca175c",
"assets/assets/images/Background--.jpg": "0ec623194170fb1879fe900bac7aeea8",
"assets/assets/images/Background-legacy.jpg": "e2672089d133f7be8194b73761a92f1c",
"assets/assets/images/Background.jpg": "0ec623194170fb1879fe900bac7aeea8",
"assets/assets/images/complete.png": "1d022687d0f346d01a485bdfc54c7180",
"assets/assets/images/edittt.png": "761db1e03a84e1780aae56b3631a4630",
"assets/assets/images/Foreground-legacy.jpg": "3a44bdcdafcb2b9ce1576a029256e1d0",
"assets/assets/images/Foreground.jpg": "1a24f7be6bae4d004945d05a1b218c20",
"assets/assets/images/fragment1.png": "4bdb03a811b760efb70814c91e442f45",
"assets/assets/images/fragment2.png": "c757f7d21eb33ca210b20f48a75042a1",
"assets/assets/images/fragment4.png": "c0eb6ca1cb48a0261834884376ae6fc1",
"assets/assets/images/fragment6.png": "089866567cdf9aa065e244d6ebbd6336",
"assets/assets/images/paper.png": "090f115d2d83014ab2a54a2a0156e966",
"assets/assets/images/workBg.png": "3f7563e18239832ed477b181dd81e490",
"assets/assets/images/works/project1-1.png": "a79d189c503b4fceae431b9e46548e08",
"assets/assets/images/works/project1-2.png": "5ffb6544c4d9b56311c57b7675d9ccb8",
"assets/assets/images/works/project1-3.png": "88e4b4ec52039308466d8f57ec8a9618",
"assets/assets/images/works/project2-1.png": "4ad284fa33786bcbf36680b239ed06e8",
"assets/assets/images/works/project2-2.png": "bd43d1df02175cbfc9d4c45a77f41c87",
"assets/assets/images/works/project3-1.png": "d662646017f066dbc5f2cd2d1908920f",
"assets/assets/images/works/project3-2.png": "a2984d82ef1f5191d1b53141c38c9396",
"assets/assets/images/works/project3-3.png": "fb586c1ee6420b175d2fd2ce47acc214",
"assets/assets/images/works/project4-1.png": "08f5800cb10710e9da8c74971dd72103",
"assets/assets/images/works/project4-2.png": "c404f95b434b9c92e07296bdd9081248",
"assets/assets/images/works/project4-3.png": "d915cff43548f7236011367a47a9e19f",
"assets/assets/images/works/project6-1.png": "95efdf99e4cfcd38b6550b20ecbb091b",
"assets/assets/images/works/project6-2.png": "54d8c65e169d8dafb76dfe50797fff01",
"assets/FontManifest.json": "33ab002bb6a456cdc60c2eb75e7bc49e",
"assets/fonts/MaterialIcons-Regular.otf": "c232cea42bdd18fa3b3da1d7270a0f9f",
"assets/NOTICES": "3c552d29b7654c49e9c549879f0b7ff6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/grain/assets/grain.png": "4ee11adfab0fa5ef9f9f32d865614f2e",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "e10bd2134218b7b9a1efd5735f3d338b",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "2f1a3240b25f8bfdf19749f98d3efe7a",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "ca69c69d3837e47b21848384bcb74d95",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "dd52632267c4e3895a78945cf7eb5fc7",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "26e0cd4176dbb3c9bf07724ad358e28f",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "e8533b0910e34e43a8d15e3114a443eb",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "ddd941c7de9ffb5f5ecacaf628480b0a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"browserconfig.xml": "f1e9b2074d197162f6390b21ab4fb4e2",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "fc18a82820c42f3bea63e571f9940a5e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "047e22211433faef2b041eb38d663825",
"icons/code-icon.svg": "c589f38babcc445fb685be8bad044878",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4da6528d356a9a11ce06c3e49f9bdeaf",
"/": "4da6528d356a9a11ce06c3e49f9bdeaf",
"main.dart.js": "e2e10bb9c9d14e3847f0ff220db40aee",
"manifest.json": "45b63f04c1f3aa35955ea5ea601c7e8d",
"version.json": "65daabffee76a5d9ef6f6ea6cce9510d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
