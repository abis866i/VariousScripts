// ==UserScript==
// @name     	Rename Browser Tab
// @include 	https://*
// @grant    	none
// @description	Renames any browser tab
// ==/UserScript==

var target = document.querySelector('title');
var titles = [
"Amazon",
"Bing",
"eBay",
"Facebook",
"Google Search",
"Instagram",
"Microsoft",
"Microsoft Office",
"Netflix",
"Reddit",
"Shopify",
"Stack Overflow",
"Twitch",
"Twitter",
"Wikipedia",
"Windows Live",
"Yahoo!",
"YouTube",
"Zoom Video"
]; 

var randomtitle = titles[Math.floor(Math.random()*titles.length)];

//alert(randomtitle);
document.title=randomtitle;

