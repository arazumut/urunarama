var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            let activeIndex = this.activeIndex;
            for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
            document.querySelectorAll(".Links li")[activeIndex].classList.add("activeLink");
        },
    },
});

function Navigate(indx) {
    swiper.slideTo(indx, 1000, true);
}
