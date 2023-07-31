$(document).ready(function(){

  // Menu-icon effect
  $(".icon-menu").on("click", function() {
    $("ul").toggleClass("showing");
  });

  // Scrolling effect
  $(document).on("scroll", function() {
    if($(window).scrollTop()) {
      $('nav').addClass('white');
      $('ul li a').addClass('black');
    }else{
      $('nav').removeClass('white');
      $('ul li a').removeClass('black');
    }
  });
  
  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    lazyLoad: true,
    margin:10,
    stagePadding: 300,
    autoplay:true,
    autoplayTimeout:3000,
    // autoplayHoverPause:true,
    responsive:{
      1800:{
        items:1,
        stagePadding: 400
      },
      0:{
          items:1,
          stagePadding: 60
      },
      600:{
          items:1,
          stagePadding: 100
      },
      1000:{
          items:1,
          stagePadding: 200
      },
      1200:{
          items:1,
          stagePadding: 250
      },
      1400:{
          items:1,
          stagePadding: 300
      },
      1600:{
          items:1,
          stagePadding: 350
      },
    }
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  })

});