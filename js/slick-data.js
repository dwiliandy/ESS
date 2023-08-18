$(document).ready(function(){
  $('.birthday-data').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.news-slick').slick({
    dots: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
        return (i + 1);
              },
    infinite: false,
    dotsClass: 'custom-dots',
    appendDots: $('.custom-dots-data'),
    prevArrow: $(".prev-news"),
    nextArrow: $(".next-news"),
    vertical: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});