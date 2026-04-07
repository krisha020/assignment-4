// animate skill bars on load
window.onload = function () {
	document.querySelector('.html').classList.add('show');
	document.querySelector('.css').classList.add('show');
	document.querySelector('.js').classList.add('show');
};
//click effect
document.querySelector('.profile-img').onclick = function (){
	this.style.transform = "scale(1.2)";
};
// hover animation
document.querySelector('.profile-img').onmouseleave = function(){
	this.style.transform = "scale(1)";
};

