// this ensures that this code will only run after the document has loaded
$(document).ready(function() {

  // For the sticky navigation
  $(".js--section-features").waypoint(function(direction) {
    if(direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
    // will happen 60px before we hit the .js--section-features
    offset: '60px'
  });

  // Scroll on buttons
  // when we click on the button the site scrolls to the top of the element with js--section-plans/js--section-features class with the speed of 1s
  $(".js--scroll-to-plan").click(function() {
    $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
  });


  // Navigation scroll
  /*
  // Smooth Scroll with jQuery
  https://css-tricks.com/snippets/jquery/smooth-scrolling/
  jQuery can also do this. Here's the code to perform a smooth page scroll to an anchor on the same page. It has some logic built in to identify those jump links, and not target other links.
  */
  // Select all links with hashes
  $(function() {
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  });

  // Animations on scroll
  // https://daneden.github.io/animate.css/ with this we only need to add the 'animated' class and then the class for the type of animation that we want for our element
  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  }, {
    offset: "50%" // half of the page
  })

  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animated fadeInUp");
  }, {
    offset: "50%" 
  })

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated fadeIn");
  }, {
    offset: "50%"
  })

  $(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass("animated pulse");
  }, {
    offset: "50%"
  })


  // Mobile navigation
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i")

    // when we click on the nav icon it opens the main navigation in 0.2s
    nav.slideToggle(200);

    if(icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    } 
  });

  // Maps
  var map = new GMaps({
    div: '.map',
    lat: 41.9992603,
    lng: 21.5,
    zoom: 12
  });

  // Maps marker (to add a marker, we need to define a map variable in the Maps code)
  map.addMarker({
    lat: 41.9992603,
    lng: 21.42,
    title: 'Skopje',
    infoWindow: {
      content: '<p>Our Skopje HQ</p>'
    }
  });

});



// lat: 42.0007911,
//     lng: 21.5134582,

  /*
  // HOW WAYPOINT WORKS
  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })
  */

  // Navigation scroll (SMOOTH SCROLLING)
  // $(function() {
  //   $("a[href*=#]:not([href=#])").click(function() {
  //     if(location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
  //       let target = $(this.hash);
  //       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  //       if(target.length) {
  //         $("html, body").animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });

  // // an example jQuery function
  // $("h1").click(function() {
  //   // 'this' means the h1 element we clicked on
  //   $(this).css("background-color", "#ff0000");
  // })