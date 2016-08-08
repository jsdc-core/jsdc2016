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
        }, 20);
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

    $(function() {
        $('#discover').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // backstretch
    $('#header').backstretch([
      '/dist/images/jsdc-scenario-1.jpg',
      '/dist/images/jsdc-scenario-2.jpg',
      '/dist/images/jsdc-scenario-3.jpg',
      '/dist/images/jsdc-scenario-4.jpg',
      '/dist/images/jsdc-scenario-5.jpg',
    ], {duration: 3000, fade: 1200, lazyload: true,});

    // lazyload
    $('div.lazy').lazyload({
      effect : 'fadeIn'
    });
    $('img.lazy').lazyload({
      effect : 'fadeIn'
    });

    // Tabs
    $('#tabs ul a').off('click'); // 不知道是哪個 lib 加入滑動的參數，因此先將之拿掉
    $( '#tabs' ).tabs();

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
      });
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
      });
    });

    // Back to Top
    // elevator
    var elevator = new Elevator({
      element: document.querySelector('#elevator-btn'),
      mainAudio: '/dist/music/elevator.mp3',
      endAudio:  '/dist/music/ding.mp3'
    });

  });
})(jQuery);
