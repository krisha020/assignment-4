document.addEventListener("DOMContentLoaded", () {
	const circles = document.querySelectorAll(".circle");
	circle.forEach(circle {
	let value = pareInt(circle.getAttribute("data-value"));
	let count = 0;
	const interval = setInterval() {
		count++;
		circle.textContent = count + "%";
		if (count = value) {
			clearInterval(interval);	
			}
		}, 20};
	});
	const cards = document.querySelectorAll(".card");
		card.addeventListener("click", () {
			card.style.backrgroundColor = "#d1e7dd";
		});
	});
});
	