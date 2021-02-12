const wrappers = document.querySelectorAll(".custom-carousel-wrapper");
wrappers.forEach((wrapper) => {
	const carousel = wrapper.querySelector(".custom-carousel");
	const [prev, next] = wrapper.querySelectorAll(".custom-carousel-button");
	const items = carousel.querySelectorAll(".custom-carousel-item");

	let current = 0;

	const apply = () => {
		items.forEach((item) => {
			item.style.transform = `translateX(${current * -100}%)`;
		});
	};

	const calculateLimit = () => {
		let limit = items.length - 1;
		if (window.innerWidth > 576) limit--;
		if (window.innerWidth > 768) limit--;
		if (window.innerWidth > 1200) limit--;

		return limit;
	};

	next.onclick = () => {
		const limit = calculateLimit();
		if (current < limit) current++;
		apply();
	};

	prev.onclick = () => {
		if (current > 0) current--;
		apply();
	};

	const reajustCarousel = () => {
		const transform = items[0].style.transform;
		if (!transform) return;

		const limit = calculateLimit();
		const value = transform.substring(11, transform.length - 2) / -100;

		if (value > limit) {
			current = limit;
			apply();
		}
	};

	const prevOnResize = window.onresize;
	window.onresize = () => {
		if (prevOnResize) prevOnResize();
		reajustCarousel();
	};
});
