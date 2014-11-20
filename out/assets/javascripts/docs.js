/* ------------------------------------------------------------------------------------------
 * Proper min-height
 * --------------------------------------------------------------------------------------- */
 $(window).resize(function(){
  $("#wrapper").css("min-height", $(window).height() - $("#header_iframe").height() - $("#footer_iframe").height() );
 });
 /* ------------------------------------------------------------------------------------------
 * END Proper min-height
 * --------------------------------------------------------------------------------------- */

var navBarIsFixed = false;

var h2s;
var h2positions = [];
var h2poslen = 0;

var scrollPosUpdateTOH = 138;

function getH2s() {
    h2s = $("#content h2");
    h2positions = [];
    for (var i = 0; i < h2s.length; i++) {
        h2positions[i] = $(h2s[i]).position().top;
    }

    h2poslen = h2positions.length;
}

function toggleTOH(el) {
    if ($("#tocHolder").is(":visible")) {
        $(el).removeClass("active");
        $("#tocHolder").hide();
        $("#toh_btn").fadeOut(90);
        $(".documentationContainer").css({"width": "720px"});
        $("#toh_btn").fadeIn(90);
        setTimeout(function() {
          updateTOHButtonPosition($(window).scrollTop());
        }, 150);
    }
    else {
        $("#toh_btn").fadeOut(90);
        $(".documentationContainer").css({"width": "520px"});
        $("#toh_btn").fadeIn(90);
        $(el).addClass("active");
        setTimeout(function() {
            container = $(".container");
            updateTOHPos(container);
            $("#tocHolder").show();
            updateTOHButtonPosition($(window).scrollTop());
        }, 150);
    }

}

function updateTOHButtonPosition(scrollTop) {
    if (scrollTop > scrollPosUpdateTOH) {
        $("#toh_btn").css({
            "position" : "fixed",
            "top" : "19px",
            "left" : ($("#content").outerWidth() + $("#content").offset().left - 36) + "px",
            "right" : ""
        });
    }
    else {
        $("#toh_btn").css({
            "position" : "absolute",
            "top" : "10px",
            "left" : "",
            "right" : "12px"
        });
    }
}

function updateTOHPos(container) {
  $("#tocHolder > ol.tocContainer").css({
    "left": $(container).outerWidth() + $(container).offset().left - $("#tocHolder > ol.tocContainer").outerWidth() + 75
  });
}

$(document).ready(function() {

   $(window).resize();

  // prep nav expands
  var pagePath = document.location.pathname.substring(document.location.pathname.lastIndexOf("/") + 1);

  if (pagePath === "")
    pagePath = "index.html";

  $("#st-search-input[title]").keydown(
      function(evt){
        if (evt.keyCode == 13) {
          var query = $(this).val();
          if (query) {
              $(this).val("");
              $(this).blur();
              var url = "https://www.google.com/search?q=" + encodeURIComponent("site:docs.c9.io " + query);
              window.open(url);
          }
          return false;
        }
      }
  );

  // select current page in sidenav and set up prev/next links if they exist
  var $selNavLink = $('#nav').find('a[href="' + pagePath + '"]');
  if ($selNavLink.length) {
    $selListItem = $selNavLink.closest('li');

    $selListItem.addClass('selected');
    $selListItem.closest('li.nav-section').addClass('expanded');
    $selListItem.closest('li.nav-section').children('ul').show();
    $selListItem.closest('li.nav-section').parent().closest('li.nav-section').addClass('expanded');
    $selListItem.closest('li.nav-section').parent().closest('ul').show();
  }

   $("a.heading_anchor").children("i").addClass("icon-hand-right");
    
   $("h2, h3, h4, h5, h6").hover(
        function () {
            $(this).find("i").css({"opacity": "1"});
            $(this).find("a").css({"margin-left": "-30px"});
        }, 
        function () {
             $(this).find("i").css({"opacity": "0"});
             $(this).find("a").css({"margin-left": "-35px"});
        }
    );
 
    $('#macTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    $('#winTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    
  // Set up expand/collapse behavior
  $('#nav li.nav-section .nav-section-header').click(function() {
    var section = $(this).closest('li.nav-section');
    if (section.hasClass('expanded')) {
      // hide me
      section.children('ul').slideUp(100, 'swing', function() {
        section.closest('li').removeClass('expanded');
      });
    } else {
      // show me
      // first hide all other siblings
      //var $others = $('li.nav-section.expanded', $(this).closest('ul'));
      //$others.removeClass('expanded').children('ul').slideUp(250);
      
      // now expand me
      section.closest('li').addClass('expanded');
      section.children('ul').slideDown(100, 'swing', function() {
      });
    }
  });
  
  $(".scroll-pane").scroll(function(event) {
      event.preventDefault();
      return false;
  });

  updateTOHButtonPosition($(window).scrollTop());

  /* Resize nav height when window height changes */
  $(window).resize(function() {
    getH2s();
    updateTOHButtonPosition($(window).scrollTop());
    container = $(".container");
    updateTOHPos(container);
  });
  
  // Get the positions of all the H2s
  getH2s();
  
  // Set up fixed navbar
  var prevScrollLeft = 0; // used to compare current position to previous position of horiz scroll

  $(window).scroll(function(event) {
    var scrollTop = $(window).scrollTop();    
    
    $($(".tocContainer.level_1").children()).removeClass("highlight");
    for (var i = 0; i < h2poslen; i++) {
       if(scrollTop + $(window).height() == $(document).height()) {
           $($(".tocContainer.level_1").children()[h2poslen - 2]).removeClass("highlight");
           $($(".tocContainer.level_1").children()[h2poslen - 1]).addClass("highlight");
           break;
       }
        if (scrollTop > (h2positions[i]-50)) {
            if (h2positions[i+1] && scrollTop < h2positions[i+1]) {
                $($(".tocContainer.level_1").children()[i]).addClass("highlight");
                break;
            }
            
            else if (i === (h2poslen - 1)) {
                $($(".tocContainer.level_1").children()[i]).addClass("highlight");
            }
        }
    }


    container = $(".container");
    updateTOHPos(container);

    if (scrollTop > scrollPosUpdateTOH) {
        $("#tocHolder > ol.tocContainer").css({
            "position" : "fixed",
            "top": "20px"
        });
    }
    else {
        $("#tocHolder > ol.tocContainer").css({
            "position" : "absolute",
            "top": "163px"
        });
    }

    updateTOHButtonPosition(scrollTop);

    if ($('#side-nav').length == 0) return;
    if (event.target.nodeName == "DIV") {
      // Dump scroll event if the target is a DIV, because that means the event is coming
      // from a scrollable div and so there's no need to make adjustments to our layout
      return;
    }
    var headerHeight = $('#header').outerHeight();
    var subheaderHeight = $('#nav-x').outerHeight();
    var searchResultHeight = $('#searchResults').is(":visible") ? 
                             $('#searchResults').outerHeight() : 0;
    var totalHeaderHeight = headerHeight + subheaderHeight + searchResultHeight;
    var navBarShouldBeFixed = scrollTop > totalHeaderHeight;

    // Don't continue if the header is sufficently far away 
    // (to avoid intensive resizing that slows scrolling)
    if (navBarIsFixed && navBarShouldBeFixed) {
      return;
    }
    
    if (navBarIsFixed != navBarShouldBeFixed) {
      if (navBarShouldBeFixed) {
        // make it fixed
        var width = $('#doc-nav').width();
        $('#doc-nav')
            .addClass('fixed')
            .css({'width':width+'px'})
            .prependTo('#body-content');
        // add neato "back to top" button
        $('#doc-nav a.totop').css({'display':'block','width':$("#nav").innerWidth()+'px'});
        
      } else {
        // make it static again
        $('#doc-nav')
            .removeClass('fixed')
            .css({'width':'auto','margin':''})
            .prependTo('#side-nav');
        $('#doc-nav a.totop').hide();
      }
      navBarIsFixed = navBarShouldBeFixed;
    } 
  });

  // Revise the sidenav widths to make room for the scrollbar 
  // which avoids the visible width from changing each time the bar appears
  var $sidenav = $("#side-nav");
  var sidenav_width = parseInt($sidenav.innerWidth());
    
  $("#doc-nav  #nav").css("width", sidenav_width - 4 + "px"); // 4px is scrollbar width
});
