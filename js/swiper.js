/* 스와이퍼 슬라이드 1 */
let swiper = new Swiper(".mySwiper", {
    /* spaceBetween: 30, */
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
  $('.swiper-button-pause').on('click', function(){
    swiper.autoplay.stop();
    $(this).removeClass('active');
    $('.swiper-button-play').addClass('active');
    $('.swiper-button-pause').css('display', 'none');
    $('.swiper-button-play').css('display', 'block');
    return false;
});
$('.swiper-button-play').on('click', function(){
    swiper.autoplay.start();
    $(this).removeClass('active');
    $('.swiper-button-pause').addClass('active');
    $('.swiper-button-play').css('display', 'none');
    $('.swiper-button-pause').css('display', 'block');
    return false;
});