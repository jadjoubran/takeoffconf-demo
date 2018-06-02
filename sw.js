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
    "url": "app.070cdcdd.css",
    "revision": "0ea14bdc6d66b534b9e7678325550370"
  },
  {
    "url": "app.64810c98.css",
    "revision": "4b57432019fab5b690ef140aed98493a"
  },
  {
    "url": "app.64810c98.js",
    "revision": "f25bf78fa7f442dbe6d8e6152bee00dc"
  },
  {
    "url": "app.df5b81fb.css",
    "revision": "9df3352c70f5121d7f35505caec54657"
  },
  {
    "url": "index.html",
    "revision": "b14c5f11e61eaaa955a1b8cc62dc64f3"
  },
  {
    "url": "js.332bb994.js",
    "revision": "b88d89e459bc5d3376791918184ababf"
  },
  {
    "url": "js.956ae3f2.js",
    "revision": "3cd6aea07fb08ecbdfee7505db1ce6e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
