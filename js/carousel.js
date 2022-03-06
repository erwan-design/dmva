$('.equipment__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:'<button id="arrowLeftEquipment"><img src="img/arrow.png" alt="Flèche navigation"></button>',
    nextArrow:'<button id="arrowRightEquipment"><img src="img/arrow.png" alt="Flèche navigation"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

$('.testimony__carousel').slick({
  autoplay: true,
  prevArrow:'<button id="arrowLeftTestimony"><img src="img/arrow.png" alt="Flèche navigation"></button>',
  nextArrow:'<button id="arrowRightTestimony"><img src="img/arrow.png" alt="Flèche navigation"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
  ]
});

