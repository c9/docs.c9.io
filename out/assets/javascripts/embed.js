var Swiftype = window.Swiftype || {};
Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com";
Swiftype.renderStyle = Swiftype.renderStyle || 'inline';

Swiftype.loadScript = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  if (script.addEventListener) {
    script.addEventListener('load', callback, false);
  } else {
    script.attachEvent('onreadystatechange', function() {
      if (/complete|loaded/.test(script.readyState))
        callback();
    });
  }
};

Swiftype.loadStylesheet = function(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
};

Swiftype.loadSupportingFiles = function(callback) {
  if (Swiftype.renderStyle === 'overlay' || typeof Swiftype.resultContainingElement === 'undefined') {
    Swiftype.loadScript("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype_overlay-5559d7aee6fc448efbaa6d84327a19ad.js", callback);
    Swiftype.loadStylesheet("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype_overlay-3a2e7bb5cdce27f41ea7dc1ce2144c84.css");
  } else if (Swiftype.renderStyle === 'new_page') {
    Swiftype.loadScript("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype_newpage-351dba23a403e1c834b130266fbab3e5.js", callback);
    Swiftype.loadStylesheet("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype-10cd1205b9d8d818b6e2a489a7f7a971.css");
  } else if (Swiftype.renderStyle === 'beta') {
    Swiftype.loadScript("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype_beta-3ae39a0e3ef76d02d53502810cf39f65.js", callback);
    Swiftype.loadStylesheet("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype-10cd1205b9d8d818b6e2a489a7f7a971.css");
  } else {
    Swiftype.loadScript("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype_onpage-d5ac6ea253486e3afe1a1805f69cfd9f.js", callback);
    Swiftype.loadStylesheet("https://swiftype-assets.a.ssl.fastly.net/assets/swiftype-10cd1205b9d8d818b6e2a489a7f7a971.css");
  }

};

var Swiftype = (function(window, undefined) {
   Swiftype.loadSupportingFiles(function(){});
   return Swiftype;
})(window);
