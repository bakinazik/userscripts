// ==UserScript==
// @name        Ekşi Sözlük
// @namespace   Block Ads
// @match       https://*.eksisozluk1923.com/*
// @grant       none
// @version     1.0
// @author      bakinazik
// @grant       GM_addStyle
// @description 13.08.2023 23:52:47
// ==/UserScript==

GM_addStyle('.mobile-only.tracked, .pena-logo-mobile.no-hover.mobile-only, .eksiseyler-logo-mobile.no-hover.mobile-only, .rate-options, .avatar, .dropdown.entry-share, .mobile-inread-ad-not-loaded, .ads, #search-box-ad{display:none !important}');
console.log('ran');