(function($) {

  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1140px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 320px)'
  });

  $(function() {

    var $window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-loading');
        }, 250);
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on mobile.
    skel.on('+mobile -mobile', function() {
      $.prioritize(
        '.important\\28 mobile\\29',
        skel.breakpoint('mobile').active
      );
    });

    // Scrolly 目前看起來還用不到，所以先隱藏起來
    // $('.scrolly').scrolly();

    // backstretch
    $('#header').backstretch([
      "./dist/images/jsdc-scenario-1.jpg",
      "./dist/images/jsdc-scenario-2.jpg",
      "./dist/images/jsdc-scenario-3.jpg",
      "./dist/images/jsdc-scenario-4.jpg",
      "./dist/images/jsdc-scenario-5.jpg",
    ], {duration: 3000, fade: 1200, lazyload: true,});

    // lazyload
    $('div.lazy').lazyload({
      effect : 'fadeIn'
    });
    $('img.lazy').lazyload({
      effect : 'fadeIn'
    });
    
    // Tabs
    $(function() {
      $( "#tabs" ).tabs();
    });
    
    // Slider / owl-carousel
    $(document).ready(function(){
      $('#speaker-carousel').owlCarousel({
        responsive:{
          0:{items:1},
          600:{items:2},
          768:{items:3},
          992:{items:4}
      },
        loop:true,
        margin:30,
        dots: false,
        nav: true,
        navContainer: '.speaker-nav',
        navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>','<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        lazyLoad:true,
      })
      $('#activity-carousel').owlCarousel({
        responsive:{
          0:{items:1}
        },
        loop: true,
        dots: false,
        nav: true,
        navContainer: '.activity-nav',
        navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>','<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
        navSpeed: 800,
        lazyLoad: true,
      })
    });
    
    
    // Back to Top
    $(document).ready(function () {
      $('#elevator-btn').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
    });
    
    
    // Reveal Navbar
    $(document).scroll(function () {
      var dist = $('#news').offset().top;
      var y = $(this).scrollTop();
      
      console.log(dist)
      
      if (y > dist) {
          $('.navbar').fadeIn();
      } else {
          $('.navbar').fadeOut();
      }
    });
    
  });
})(jQuery);
