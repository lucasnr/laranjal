(() => {
	const formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	$("#input-range-value").slider({
		id: "input-value",
		min: 53590,
		max: 92585,
		range: true,
		value: [53590, 92585],
		formatter: function (value) {
			if (Array.isArray(value)) {
				const [left, right] = value;
				return formatter.format(left) + " - " + formatter.format(right);
			}

			return formatter.format(value);
		},
	});
	$("#input-range-year").slider({
		id: "input-year",
		min: 2019,
		max: 2021,
		range: true,
		value: [2019, 2021],
		step: 1,
	});
})();
