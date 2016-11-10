var mapLink = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var mapClose = document.querySelector(".close-map");
var overlay = document.querySelector(".overlay");

mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.add("modal-map-on");
	overlay.classList.add("overlay-on");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.remove("modal-map-on");
	overlay.classList.remove("overlay-on");
});

overlay.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.remove("modal-map-on");
	overlay.classList.remove("overlay-on");
});

window.addEventListener("keydown", function(event) {
	if (mapModal.classList.contains("modal-map-on")) {
		if (event.keyCode === 27) {
			mapModal.classList.remove("modal-map-on");
			overlay.classList.remove("overlay-on");
		}
	}
});