var Swiftype = window.Swiftype || {};

(function() {
  Swiftype.key = 'zphqNpNqsFz4MJEq8ZaM';
  Swiftype.inputElement = '#st-search-input';
  Swiftype.resultContainingElement = '#st-results-container';
  Swiftype.attachElement = '#st-search-input';
  Swiftype.renderStyle = "overlay";
  Swiftype.disableAutocomplete = true;

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = "//swiftype.com/embed.js";
  //script.src = "./assets/javascripts/embed.js";
  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);
}());