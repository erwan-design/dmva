$('.equipment__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:'<button id="arrowLeftEquipment"><img src="img/icons/arrow.png" alt="Flèche navigation"></button>',
    nextArrow:'<button id="arrowRightEquipment"><img src="img/icons/arrow.png" alt="Flèche navigation"></button>',
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
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });



