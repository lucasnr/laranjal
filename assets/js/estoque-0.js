initializeSwiper({
	target: "#tabs .tab-pane.show .swiper-container.models-swiper",
});

$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
	const target = e.target.getAttribute("aria-controls");
	const element = document.getElementById(target);
	if (element.classList.contains("swiper-container-initialized")) return;

	initializeSwiper({ target: `#${target} .swiper-container.models-swiper` });
});
