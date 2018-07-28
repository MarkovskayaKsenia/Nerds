var popup = document.querySelector(".modal-feedback");
var writeBtn = document.querySelector(".contacts-btn");
var closeBtn = document.querySelector(".modal-close");
var form = popup.querySelector("form");

var userName = document.querySelector("#user-name");
var userMail = document.querySelector("#user-email");
var mailText = document.querySelector("#email-text");

var storageName = localStorage.getItem("user-name");
var storageMail = localStorage.getItem("user-email");


writeBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	
	if(storageName && storageMail) {
	userName.value = storageName;
	userMail.value = storageMail;
	mailText.focus();
	} else {
		userName.focus();
	}
	
});

closeBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
	if(!userName.value || !userMail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("user-name", userName.value);
		localStorage.setItem("user-email", userMail.value);
	}	
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
