let accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (event) {
	let currentTarget = event.target;
	if (currentTarget.classList.contains("accordion__item-header")) {
		if (currentTarget.nextElementSibling.classList.contains("open")) {

		} else {
			let = accordionOpen = document.querySelector(".accordion__item-body.open");
			accordionOpen.classList.remove("open");
			
			currentTarget.nextElementSibling.classList.toggle("open");
		}
	}
});