$(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
});

const swiper = new Swiper(".visual_list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정..(bullet)
        clickable: true, //버튼 클릭여부
    },
    speed: 1000, // 슬라이드 넘어갈떄 속도 
    loop: true, //기본값 false 슬라이드 반복
    effect: "fade", //슬라이드 넘어갈떄 fade 효과

});

//search
$(".btn_search").click(function () {
    $(".search").fadeIn();
});
$(".search_close").click(function () {
    $(".search").fadeOut();
});

$(".btn_ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({ "right": "0" }, 800);
});
$(".mgnb_close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb_wrap").animate({ "right": "-100%" }, 800);
});

//info
const info = new Swiper(".info_list", {
    slidesPerView: 1,
    breakpoints: {
        750: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },

    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: ".info-next",
        prevEl: ".info-prev",
    },

});

//brand_txt_list
const brand_txt_list = new Swiper(".brand_txt_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

//brand_img_list
const brand_img_list = new Swiper(".brand_img_list", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
});
// 두 슬라이스 연결
brand_txt_list.controller.control = brand_img_list
brand_img_list.controller.control = brand_txt_list

//gallery
$(".gallery ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});