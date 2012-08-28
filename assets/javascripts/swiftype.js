var rewriteURLs = function() {
  setTimeout(function () {
    $('div#st-results-container div.st-result').find('h3 a').each(function(i) { 
      $(this).attr("href", $(this).attr("href").replace("http", "https"));
    });

    $('div.st-result-text').mouseover(function(){
      $(this).addClass("active");
    }).mouseout(function(){
      $(this).removeClass("active");   
    });

    $('div.st-result-text').click(function() {
      window.location.href = $('div.st-result-text.active h3 a').attr("href"); // .click() doesn't work here
    });
  }, 500);
}

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

$(document).ready(function() {
  $('#st-search-input[title]').tooltip({trigger: 'focus'});

  $('#st-search-input').keypress(function(e) {
        if(e.which == 13) {
            rewriteURLs();
        }
    });

  $('st-page st-next').click(rewriteURLs);
  $('st-page st-prev').click(rewriteURLs);
});

// below are fixes for the fact that the autocompletion class
// does not support https links
/*var autocompleteRenderer = function(document_type, item) {
  return '<p class="title"><a href="' + item['url'].replace("http", "https") + '">' + item['title'] + '</a></p>';
};

$(function() {
  $('#st-search-input').swiftype({
    renderFunction: autocompleteRenderer,
    engineKey: 'zphqNpNqsFz4MJEq8ZaM'
  });
});

$(document).ready(function() {

  $('ul.st-autocomplete').click(function() {
    window.location.href = $('.st-autocomplete li.active p a').attr("href"); // .click() doesn't work here
  });
});*/