(() => {
	const navbar = document.querySelector("#navbar");
	const toggler = navbar.querySelector("#menu-toggler");
	const icon = toggler.querySelector("i");
	const nav = navbar.querySelector("#nav ul");

	let active = false;
	toggler.onclick = () => {
		if (window.innerWidth >= 1025) return;

		toggler.classList.toggle("active");
		active = !active;

		if (active) {
			icon.classList.remove("fa-bars");
			icon.classList.add("fa-times");
			nav.setAttribute("aria-hidden", "false");
			nav.setAttribute("aria-expanded", "true");
		} else {
			icon.classList.remove("fa-times");
			icon.classList.add("fa-bars");
			nav.setAttribute("aria-hidden", "true");
			nav.setAttribute("aria-expanded", "false");
		}
	};

	const links = nav.querySelectorAll("li a");
	links.forEach((link) => {
		link.onclick = () => {
			toggler.onclick();
			return true;
		};
	});
})();
