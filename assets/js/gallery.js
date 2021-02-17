(() => {
	let galleryThumbs = new Swiper(".gallery-thumbs", {
		spaceBetween: 14,
		slidesPerView: 5,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	new Swiper(".gallery-top", {
		spaceBetween: 14,
		loopedSlides: 5, //looped slides should be the same
		thumbs: {
			swiper: galleryThumbs,
		},
	});
})();
