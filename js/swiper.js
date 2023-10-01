/* 스와이퍼 슬라이드 1  메인배너*/
let swiper1 = new Swiper(".swiper1", {
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 재생 정지 버튼 */
$('.swiper-button-pause').on('click', function () {
  swiper1.autoplay.stop();
  $(this).removeClass('active');
  $('.swiper-button-play').addClass('active');
  $('.swiper-button-pause').css('display', 'none');
  $('.swiper-button-play').css('display', 'block');
  return false;
});
$('.swiper-button-play').on('click', function () {
  swiper1.autoplay.start();
  $(this).removeClass('active');
  $('.swiper-button-pause').addClass('active');
  $('.swiper-button-play').css('display', 'none');
  $('.swiper-button-pause').css('display', 'block');
  return false;
});

/* 스와이퍼 슬라이드2 팝업 */

let swiper2 = new Swiper(".swiper2", {
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainPopup .swiper-pagination",
    clickable: true,
    // slideToClickedSlide: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  navigation: {
    nextEl: ".mainPopup #swiper-button-next",
    prevEl: ".mainPopup #swiper-button-prev",
  },
});

/* 재생 정지 버튼 */
$('.pause2').on('click', function () {
  swiper2.autoplay.stop();
  $(this).removeClass('on3');
  $('.play2').addClass('on3');
  $('.pause2').css('display', 'none');
  $('.play2').css('display', 'block');
  return false;
});
$('.play2').on('click', function () {
  swiper2.autoplay.start();
  $(this).removeClass('on3');
  $('.pause2').addClass('on3');
  $('.play2').css('display', 'none');
  $('.pause2').css('display', 'block');
  return false;
});

/* 각 슬라이드 컨트롤 */
swiper1.controller.control = swiper1;
swiper2.controller.control = swiper2;