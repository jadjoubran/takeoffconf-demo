/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "109b675c1e33a664b156c0b464810c98.css",
    "revision": "b3cb2492176fa2123ba2ff0990e623e0"
  },
  {
    "url": "109b675c1e33a664b156c0b464810c98.js",
    "revision": "b63df8f28cc8d0e5f367ae09d5d884f1"
  },
  {
    "url": "3613f4df087620710749460b96c890d6.svg",
    "revision": "07443349983cf7d4c798c14fc35dce4d"
  },
  {
    "url": "39ed813aedd41f02f82c3479cdadc956.css",
    "revision": "e6c054d9bc4ac8d6242c8e9342d9fce1"
  },
  {
    "url": "39ed813aedd41f02f82c3479cdadc956.js",
    "revision": "115f795610f7eb384aeb9591ab42ac9f"
  },
  {
    "url": "3dd438a199134daaa94befadbb5d9c82.png",
    "revision": "a54745e9c65c0b0ab79ff11db5c3c26b"
  },
  {
    "url": "557fe36898d41e1b412b55d69c66d9ee.png",
    "revision": "f77f4689dc8702998e1c8f6a485e9361"
  },
  {
    "url": "73175b44ada6dbcc53e4d80a8921834b.png",
    "revision": "c7f88eacff3ec750fcf804d34ec89024"
  },
  {
    "url": "7a621d23e54c17d02f55f0d5bb05fc8c.png",
    "revision": "a45c0e9abf41a68a64edefe64a35f24e"
  },
  {
    "url": "80ed0b6aac481629c3cc6ad7956ae3f2.js",
    "revision": "3638e46dd5481a5b5a1c60288c3e7ed4"
  },
  {
    "url": "997a4d3eb8b3b09825dd0bf3c3d039f1.png",
    "revision": "c275c1ec2c14c55926d28774d2a6a2c9"
  },
  {
    "url": "9c19a0cdd5de20cdee8bf494ab103d7c.js",
    "revision": "a271ac23f1a312190cf49e284c5bcd09"
  },
  {
    "url": "android-chrome-192x192.bb05fc8c.png",
    "revision": "a45c0e9abf41a68a64edefe64a35f24e"
  },
  {
    "url": "android-chrome-192x192.d53a828e.png",
    "revision": "a45c0e9abf41a68a64edefe64a35f24e"
  },
  {
    "url": "android-chrome-512x512.8921834b.png",
    "revision": "c7f88eacff3ec750fcf804d34ec89024"
  },
  {
    "url": "android-chrome-512x512.f2677be1.png",
    "revision": "c7f88eacff3ec750fcf804d34ec89024"
  },
  {
    "url": "app.42537ef8.css",
    "revision": "107061b9103809e722e57279c992b18c"
  },
  {
    "url": "app.64810c98.css",
    "revision": "1eddc0a861a24d7b45bd938decb77d62"
  },
  {
    "url": "app.64810c98.js",
    "revision": "5dde3b26b263367ab3890fd8a496f9c7"
  },
  {
    "url": "apple-touch-icon.944a8471.png",
    "revision": "c275c1ec2c14c55926d28774d2a6a2c9"
  },
  {
    "url": "apple-touch-icon.c3d039f1.png",
    "revision": "c275c1ec2c14c55926d28774d2a6a2c9"
  },
  {
    "url": "b8b9f41189797f254f55f6a31e14111b.js",
    "revision": "560a3d1785a3929ee01aefb0e0fb82e3"
  },
  {
    "url": "b8eb4ccc9a8b0851d13d9e3562c5d7ab.ico",
    "revision": "85763f111a5373d6dcaa8079f742c5af"
  },
  {
    "url": "ebc8056cd3567ff641f8b9048a4456a9.webmanifest",
    "revision": "f1eed8660bf5804e4779333bbea6818e"
  },
  {
    "url": "favicon-16x16.04a3faea.png",
    "revision": "f77f4689dc8702998e1c8f6a485e9361"
  },
  {
    "url": "favicon-16x16.9c66d9ee.png",
    "revision": "f77f4689dc8702998e1c8f6a485e9361"
  },
  {
    "url": "favicon-32x32.a6a6fd5b.png",
    "revision": "a54745e9c65c0b0ab79ff11db5c3c26b"
  },
  {
    "url": "favicon-32x32.bb5d9c82.png",
    "revision": "a54745e9c65c0b0ab79ff11db5c3c26b"
  },
  {
    "url": "favicon.62c5d7ab.ico",
    "revision": "85763f111a5373d6dcaa8079f742c5af"
  },
  {
    "url": "favicon.ab59392a.ico",
    "revision": "85763f111a5373d6dcaa8079f742c5af"
  },
  {
    "url": "hammer.min.01f4db16.js",
    "revision": "093cad3a1f5e9032d3daa52db1f59e1c"
  },
  {
    "url": "hammer.min.1e14111b.js",
    "revision": "a92df7b24ee503048d158f81c7565a7e"
  },
  {
    "url": "index.html",
    "revision": "bf19463aaa4a094f6bf343c3248034e3"
  },
  {
    "url": "js.1656cf22.js",
    "revision": "2b414bedd2c04da6a0647c4b42f7cbb4"
  },
  {
    "url": "js.63fed464.js",
    "revision": "7b766dee99bb03b7d54785ce9c0cfddc"
  },
  {
    "url": "js.956ae3f2.js",
    "revision": "33c5f0e500a0f221a2f2144e6a77495b"
  },
  {
    "url": "main.js",
    "revision": "24d4304a0cacda04f2f98f57d0afdbc7"
  },
  {
    "url": "safari-pinned-tab.40b16194.svg",
    "revision": "07443349983cf7d4c798c14fc35dce4d"
  },
  {
    "url": "safari-pinned-tab.96c890d6.svg",
    "revision": "07443349983cf7d4c798c14fc35dce4d"
  },
  {
    "url": "site.56526ef4.webmanifest",
    "revision": "7899fc96771de153f5bef1b70bc4276e"
  },
  {
    "url": "site.8a4456a9.webmanifest",
    "revision": "bf97680144eaa1de6f74ca3bc164ba91"
  },
  {
    "url": "vanilla-ripplejs.js",
    "revision": "b1db18d718e7f24e16781db049069f19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
