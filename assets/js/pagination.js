(() => {
	const container = document.querySelector("#custom-cards");
	const nav = container.nextElementSibling.querySelector(".pagination");
	const items = document.querySelectorAll("#custom-cards > *");

	const hideAll = () => {
		for (let index = 0; index < items.length; index++)
			items[index].style.display = "none";
	};
	hideAll();

	let current = 0;

	const showCurrent = () => {
		for (let index = 0; index < 8; index++)
			items[index + current * 8].style.display = "block";
	};
	showCurrent();

	const prev = (e) => {
		e.preventDefault();
		if (current === 0) return;

		current--;
		hideAll();
		showCurrent();
	};

	const next = (e) => {
		e.preventDefault();
		if (current === Math.ceil(items.length / 8) - 1) return;

		current++;
		hideAll();
		showCurrent();
	};

	const createControls = () => {
		const prev = nav.querySelector("li");

		const amount = Math.ceil(items.length / 8);
		for (let index = amount; index > 0; index--) {
			const li = document.createElement("li");
			li.classList.add("page-item");
			const a = document.createElement("a");
			a.href = "#";
			a.textContent = index;
			a.classList.add("page-link");
			a.onclick = (e) => {
				e.preventDefault();
				current = index - 1;
				hideAll();
				showCurrent();
			};
			li.appendChild(a);
			prev.parentNode.insertBefore(li, prev.nextSibling);
		}
	};
	createControls();

	const controls = nav.querySelectorAll(".page-link");
	controls.forEach((link, index) => {
		if (index === 0) {
			link.onclick = prev;
			return;
		}

		if (index === controls.length - 1) {
			link.onclick = next;
			return;
		}
	});
})();
