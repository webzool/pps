//Vue.JS Configurations

new Vue({
    el: "#home-main",
    data: {
        name: "Sitepoint",
        data: {
            name: ''
        },
    },
    methods: {
        handleScroll: (event, el) => {
            if (window.scrollY >= 10) {
                el.classList.add('bg-buttonblue');
            } else {
                el.classList.remove('bg-buttonblue');
            }
        }
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

new Vue({
    el: "#item-body",
    methods: {
        // Convenience method to scroll a heading into view.
        // Not required for scrollspy to work
        scrollIntoView(evt) {

            const href = evt.target.getAttribute('href')
            const el = href ? document.querySelector(href) : null
            if (el) {
                this.$refs.content.scrollTop = el.offsetTop
            }
        },
    },
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
