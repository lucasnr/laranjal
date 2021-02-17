const initializeSwiper = ({ target, spaceBetween = 30 }) => {
	return new Swiper(target, {
		slidesPerView: 1,
		spaceBetween,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
};
