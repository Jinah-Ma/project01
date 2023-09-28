$(function () {
    $('#wrap').fullpage({
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],
        sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
        navigation: true,
        navigationPosition: 'right',
    })
});
// 높이가 생긴다. 100vh로 잡힌다.(도큐먼트 레디가 이걸로 바뀌었다.★)

$(() => {
    $('.close').on('click', function (e) {
        e.preventDefault();
        $('.popup').hide();
    });
});
// popup

/* 서브배너/ 전시 */
let slideBtn1 = $('.sabBanner .oneCard');
let slideBtn2 = $('.sabBanner .twoCard');
let slideBtn3 = $('.sabBanner .threeCard');

slideBtn1.on('click', function () {
    $(this, '.oneContents').addClass('active');
    $(slideBtn2, '.twoContents').removeClass('active');
    $(slideBtn3, '.threeContents').removeClass('active');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn2.css('border', 'none');
    slideBtn2.css('margin-bottom', '0');
    slideBtn3.css('border', 'none');
    slideBtn3.css('margin-bottom', '0');

    $('.twoContents').hide();
    $('.threeContents').hide();
    $('.oneContents').show();
});

slideBtn2.on('click', function () {
    $(this, '.twoContents').addClass('active');
    $(slideBtn1, '.oneContents').removeClass('active');
    $(slideBtn3, '.threeContents').removeClass('active');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn1.css('border', 'none');
    slideBtn1.css('margin-bottom', '0');
    slideBtn3.css('border', 'none');
    slideBtn3.css('margin-bottom', '0');

    $('.oneContents').hide();
    $('.threeContents').hide();
    $('.twoContents').css('display', 'flex');
});

slideBtn3.on('click', function () {
    $(this, '.threeContents').addClass('active');
    $(slideBtn1, '.oneContents').removeClass('active');
    $(slideBtn2, '.twoContents').removeClass('active');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn2.css('border', 'none');
    slideBtn2.css('margin-bottom', '0');
    slideBtn1.css('border', 'none');
    slideBtn1.css('margin-bottom', '0');

    $('.oneContents').hide();
    $('.twoContents').hide();
    $('.threeContents').css('display', 'flex');
});

/* 컨텐츠 슬라이드/ 교육문화 */
slideBtn12 = $('.contentsSlide .oneCard2');
slideBtn22 = $('.contentsSlide .twoCard2');
slideBtn32 = $('.contentsSlide .threeCard2');

slideBtn12.on('click', function () {
    $(this, '.oneContents2').addClass('active2');
    $(slideBtn22, '.twoContents2').removeClass('active2');
    $(slideBtn32, '.threeContents2').removeClass('active2');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn22.css('border', 'none');
    slideBtn22.css('margin-bottom', '0');
    slideBtn32.css('border', 'none');
    slideBtn32.css('margin-bottom', '0');

    $('.twoContents2').hide();
    $('.threeContents2').hide();
    $('.oneContents2').show();
});

slideBtn22.on('click', function () {
    $(this, '.twoContents2').addClass('active2');
    $(slideBtn12, '.oneContents2').removeClass('active2');
    $(slideBtn32, '.threeContents2').removeClass('active2');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn12.css('border', 'none');
    slideBtn12.css('margin-bottom', '0');
    slideBtn32.css('border', 'none');
    slideBtn32.css('margin-bottom', '0');

    $('.oneContents2').hide();
    $('.threeContents2').hide();
    $('.twoContents2').css('display', 'flex');
});

slideBtn32.on('click', function () {
    $(this, '.threeContents2').addClass('active2');
    $(slideBtn12, '.oneContents2').removeClass('active2');
    $(slideBtn22, '.twoContents2').removeClass('active2');

    $(this).css('border-bottom', '10px solid #00A4B7');
    $(this).css('margin-bottom', '-10px');
    slideBtn22.css('border', 'none');
    slideBtn22.css('margin-bottom', '0');
    slideBtn12.css('border', 'none');
    slideBtn12.css('margin-bottom', '0');

    $('.oneContents2').hide();
    $('.twoContents2').hide();
    $('.threeContents2').css('display', 'flex');
});

/* 메인뉴스 */

