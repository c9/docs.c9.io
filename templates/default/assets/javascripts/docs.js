var navBarIsFixed = false;

var h2s;
var h2positions = [];
var h2poslen = 0;

var scrollPosUpdateTOH = 62;

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
        $(".documentationContainer").removeClass("span8").addClass("span10");
        updateTOHButtonPosition($(window).scrollTop());
    }
    else {
        $(".documentationContainer").removeClass("span10").addClass("span8");
        $(el).addClass("active");
        setTimeout(function() {
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
            "right" : ($($(".tocContainer.level_1")[0]).outerWidth() + 15) + "px"
        });
    }
    else {
        $("#toh_btn").css({
            "position" : "absolute",
            "top" : "10px",
            "right" : "10px"
        });
    }
}

$(document).ready(function() {
  // prep nav expands
  var pagePath = document.location.pathname.substring(document.location.pathname.lastIndexOf("/") + 1);

  if (pagePath === "")
    pagePath = "index.html";

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
  
  // Set up expand/collapse behavior
  $('#nav li.nav-section .nav-section-header').click(function() {
    var section = $(this).closest('li.nav-section');
    if (section.hasClass('expanded')) {
      // hide me
      section.children('ul').slideUp(100, 'swing', function() {
        section.closest('li').removeClass('expanded');
        resizeNav();
      });
    } else {
      // show me
      // first hide all other siblings
      //var $others = $('li.nav-section.expanded', $(this).closest('ul'));
      //$others.removeClass('expanded').children('ul').slideUp(250);
      
      // now expand me
      section.closest('li').addClass('expanded');
      section.children('ul').slideDown(100, 'swing', function() {
        resizeNav();
      });
    }
  });
  
  $(".scroll-pane").scroll(function(event) {
      event.preventDefault();
      return false;
  });

  /* Resize nav height when window height changes */
  $(window).resize(function() {
    getH2s();
    updateTOHButtonPosition($(window).scrollTop());
    if ($('#side-nav').length == 0) return;
    var stylesheet = $('link[rel="stylesheet"][class="fullscreen"]');

    resizeNav();
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

    if (scrollTop > scrollPosUpdateTOH) {
        $("#tocHolder > ol.tocContainer").css({
            "position" : "fixed",
            "top": "8px"
        });
    }
    else {
        $("#tocHolder > ol.tocContainer").css({
            "position" : "absolute",
            "top": "70px"
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
    
    resizeNav(250); // pass true in order to delay the scrollbar re-initialization for performance
  });

  // Revise the sidenav widths to make room for the scrollbar 
  // which avoids the visible width from changing each time the bar appears
  var $sidenav = $("#side-nav");
  var sidenav_width = parseInt($sidenav.innerWidth());
    
  $("#doc-nav  #nav").css("width", sidenav_width - 4 + "px"); // 4px is scrollbar width


  $(".scroll-pane").removeAttr("tabindex"); // get rid of tabindex added by jscroller
  
  if ($(".scroll-pane").length > 1) {
    // Check if there's a user preference for the panel heights
    var cookieHeight = readCookie("reference_height");
    if (cookieHeight) {
      restoreHeight(cookieHeight);
    }
  }
  
  resizeNav();
});


// TODO: use $(document).ready instead
function addLoadEvent(newfun) {
  var current = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = newfun;
  } else {
    window.onload = function() {
      current();
      newfun();
    }
  }
}

/* ######### RESIZE THE SIDENAV HEIGHT ########## */

function resizeNav(delay) {
  var $nav = $("#doc-nav");
  var $window = $(window);
  var navHeight;
  
  // Get the height of entire window and the total header height.
  // Then figure out based on scroll position whether the header is visible
  var windowHeight = $window.height();
  var scrollTop = $window.scrollTop();
  var headerHeight = $('#header').outerHeight();
  var subheaderHeight = $('#nav-x').outerHeight();
  var headerVisible = (scrollTop < (headerHeight + subheaderHeight));
  
  // get the height of space between nav and top of window. 
  // Could be either margin or top position, depending on whether the nav is fixed.
  var topMargin = (parseInt($nav.css('margin-top')) || parseInt($nav.css('top'))) + 1; 
  // add 1 for the #side-nav bottom margin
  
  // Depending on whether the header is visible, set the side nav's height.
  if (headerVisible) {
    // The sidenav height grows as the header goes off screen
    navHeight = windowHeight - (headerHeight + subheaderHeight - scrollTop) - topMargin;
  } else {
    // Once header is off screen, the nav height is almost full window height
    navHeight = windowHeight - topMargin;
  }
  
  $scrollPanes = $(".scroll-pane");
  if ($scrollPanes.length > 1) {
    // subtract the height of the api level widget and nav swapper from the available nav height
    navHeight -= ($('#api-nav-header').outerHeight(true) + $('#nav-swap').outerHeight(true));
    
    $("#swapper").css({height:navHeight + "px"});
    if ($("#nav-tree").is(":visible")) {
      $("#nav-tree").css({height:navHeight});
    }
    
    var classesHeight = navHeight - parseInt($("#resize-packages-nav").css("height")) - 10 + "px"; 
    //subtract 10px to account for drag bar
    
    // if the window becomes small enough to make the class panel height 0, 
    // then the package panel should begin to shrink
    if (parseInt(classesHeight) <= 0) {
      $("#resize-packages-nav").css({height:navHeight - 10}); //subtract 10px for drag bar
      $("#packages-nav").css({height:navHeight - 10});
    }
    
    $("#classes-nav").css({'height':classesHeight, 'margin-top':'10px'});
    $("#classes-nav .jspContainer").css({height:400}); // hack
    
    
  } else {
    $nav.height(navHeight);
  }
  
  if (delay) {
    updateFromResize = true;
    delayedReInitScrollbars(delay);
  } else {
    reInitScrollbars();
  }
  
}

var updateScrollbars = false;
var updateFromResize = false;

/* Re-initialize the scrollbars to account for changed nav size.
 * This method postpones the actual update by a 1/4 second in order to optimize the
 * scroll performance while the header is still visible, because re-initializing the
 * scroll panes is an intensive process.
 */
function delayedReInitScrollbars(delay) {
  // If we're scheduled for an update, but have received another resize request
  // before the scheduled resize has occured, just ignore the new request
  // (and wait for the scheduled one).
  if (updateScrollbars && updateFromResize) {
    updateFromResize = false;
    return;
  }
  
  // We're scheduled for an update and the update request came from this method's setTimeout
  if (updateScrollbars && !updateFromResize) {
    reInitScrollbars();
    updateScrollbars = false;
  } else {
    updateScrollbars = true;
    updateFromResize = false;
    setTimeout('delayedReInitScrollbars()',delay);
  }
}

/* Re-initialize the scrollbars to account for changed nav size. */
function reInitScrollbars() {
  var pane = $(".scroll-pane").each(function(){
    var api = $(this).data('jsp');
    if (!api) { setTimeout(reInitScrollbars,300); return;}
    api.reinitialise( {verticalGutter:0} );
  });  
  $(".scroll-pane").removeAttr("tabindex"); // get rid of tabindex added by jscroller
}


function restoreHeight(packageHeight) {
    $("#resize-packages-nav").height(packageHeight);
    $("#packages-nav").height(packageHeight);
  //  var classesHeight = navHeight - packageHeight;
 //   $("#classes-nav").css({height:classesHeight});
  //  $("#classes-nav .jspContainer").css({height:classesHeight});
}



/* ######### END RESIZE THE SIDENAV HEIGHT ########## */