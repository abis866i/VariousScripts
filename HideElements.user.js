// ==UserScript==
// @name        Hide Elements
// @namespace   https://github.com/abis866i
// @version     1
// @include     http*://*.ro/*
// @updateURL   https://raw.githubusercontent.com/abis866i/adblocklists/master/HideElements.user.js
// @downloadURL https://raw.githubusercontent.com/abis866i/adblocklists/master/HideElements.user.js
// @grant       none
// ==/UserScript==

var blocklist = new Array();
blocklist["div"]    = [["class", /.*anunturi.*/i],
                       ["class", /.*(banner|best-of|blogsporti|bulina).*/i],
                       ["class", /.*iframe.*/i],
                       ["class", /.*nivea.*/i],
                       ["class", /.*parteneri.*/i],
                       ["class", /.*widget.*/i],
                       ["id",    /.*ultima-ora.*/i]];

blocklist["a"]      = [["href", /.*locuridemunca.*/i]];

blocklist["img"]    = [["src", /.*widget.*/i]];

for(var tag in blocklist) {
    var elem = document.getElementsByTagName( tag );
    for(var pattern = 0; pattern < blocklist[tag].length; pattern++) {
       for(var el=0; el<elem.length; el++) {
          if ( elem[el].getAttribute(blocklist[tag][pattern][0])!=null &&  elem[el].getAttribute(blocklist[tag][pattern][0]).match( blocklist[tag][pattern][1])){
             elem[el].style.display = 'none';
          }
       }
    }
}

