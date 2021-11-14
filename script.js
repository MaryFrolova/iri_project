$(document).ready(function() {
  $('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
  });
});

function toggleMenu() {
  let menu = document.getElementsByClassName('menu-btn');
  let $logo = $('.logo');
  if ($logo.hasClass('logo-white')){
    $logo.removeClass('logo-white');
  } else {
  $logo.addClass('logo-white');
  }
}