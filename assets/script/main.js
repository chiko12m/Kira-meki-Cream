// スライド
$('.voice__group').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// アコーディオン
$('.faq__question').click(function(){
    const answer = $(this).next('.faq__answer-wrap');
    const arrow = $(this).find('.faq__arrow');
    answer.slideToggle(300).toggleClass('open');
    arrow.toggleClass('rotate');
});

// スクロール
$('.footer__scroll-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});