let resize = window.addEventListener('resize', function(event){
    
  let widhtWindow = document.documentElement.clientWidth;

  if (widhtWindow < 640){
      $('.advantages-list').slick({
          slidesToShow: 1,
          adaptiveHeight: true

  });
  } else {
  $(".advantages-list").slick("unslick");
  }
  });
let onload = window.addEventListener("load", function(event) {
    let widhtWindow = document.body.clientWidth;

    if (widhtWindow < 640){
        $('.advantages-list').slick({
            slidesToShow: 1,
            adaptiveHeight: true
    });
    } else {
    $(".advantages-list").slick("unslick");
    }
  });
  

