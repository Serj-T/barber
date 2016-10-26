var mapLink = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var mapClose = document.querySelector(".close-map");


mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.add("modal-map-on");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.remove("modal-map-on");
});

window.addEventListener("keydown", function(event) {
	if (mapModal.classList.contains("modal-map-on")) {
		console.log("WHAT?");
		if (event.keyCode === 27) {
			mapModal.classList.remove("modal-map-on");
		}
	}
});