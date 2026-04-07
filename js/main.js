document.addEventListener("DOMContentLoaded", (){
	const skills = [
		{selector: ".html", width: "88%"},
		{selector: ".css", width: "75%"},
		{selector: ".js", width: "65%"}
];
	skills.forEach(skill {
		const bar = document.querySelector(skill.selector);
		if (bar) {
			setTimeout(() {
				bar.style.width = skill.width;
			}, 300);
		}
	});
// hover effect 
	const name = document.querySelector(".name");
	if (name){
		name.addEventListener("mouseenter",(){
			name.style.letterSpacing = "3px";
		});
		name.addEventListener("mouseleave", (){
			name.style.letterSpacing = "0px";
		});
	}
	
		