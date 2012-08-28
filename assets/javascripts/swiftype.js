  var Swiftype = window.Swiftype || {};
  (function() {
    Swiftype.key = 'zphqNpNqsFz4MJEq8ZaM';
    Swiftype.inputElement = '#st-search-input';
    Swiftype.resultContainingElement = '#st-results-container';
    Swiftype.attachElement = '#st-search-input';
    Swiftype.renderStyle = "overlay";

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "//swiftype.com/embed.js";
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  }());