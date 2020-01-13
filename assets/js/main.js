//Vue.JS Configurations

new Vue({
    el: "#home-main",
    data: {
        name: "Sitepoint",
        data: {
            name: ''
        },
    }
});

new Vue({
    el: "#home-tabs-1",
    data: {
        name: ''
    },
});

new Vue({
    el: "#home-tabs-2",
});


//Swiper Slide Configurations

var logosSwiper = new Swiper('.logos-container', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        // when window width is >= 480px
        300: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1100: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }
})
