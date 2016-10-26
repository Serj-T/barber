var link = document.querySelector(".login");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close")
var login = popup.querySelector("[name=user-login]");
var password = popup.querySelector("[name=user-pass]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-on");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-on");
	popup.classList.remove("modal-error");
});


form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (popup.classList.contains("modal-on")) {
		console.log("Нет класса");
		if (event.keyCode === 27) {
			popup.classList.remove("modal-on");
			popup.classList.remove("modal-error");
		}
	}
});