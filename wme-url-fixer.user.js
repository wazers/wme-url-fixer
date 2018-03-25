// ==UserScript==
// @name        WME URL Fixer
// @namespace   http://www.tomputtemans.com/
// @description Temporary workaround to get your userscripts working again when you are missing the trailing slash in the URL
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor([^\/].*)?$/
// @version     1.3
// @grant       none
// ==/UserScript==

if (window.location.pathname.indexOf('editor/') == -1 && window.location != window.location.href.replace('/editor', '/editor/')) {
  setTimeout(function() {
    window.location = window.location.href.replace('/editor', '/editor/');
  }, 5000);
}