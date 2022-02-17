content = document.querySelector("#content");
width = document.querySelector("#width");
theme = document.querySelector("#theme");
colorTheme = document.querySelector("#colorTheme");
button = document.querySelector("button#result.result");


content.addEventListener("keydown", (e) => {
	renderOutput();
});
width.addEventListener("keydown", (e) => {
	renderOutput();
});
content.addEventListener("keyup", (e) => {
	renderOutput();
});
width.addEventListener("keyup", (e) => {
	renderOutput();
});
content.addEventListener("change", (e) => {
	renderOutput();
});
width.addEventListener("change", (e) => {
	renderOutput();
});
theme.addEventListener("change", (e) => {
	renderOutput();
});
colorTheme.addEventListener("change", (e) => {
	renderOutput();
});

function renderOutput(){
	values = [content.value,width.value + "px",theme.value,colorTheme.value];
	button.textContent = values[0];
	button.style.width = values[1];
	if(theme.value === "HTML Classic Button" || theme.value === "Bootstrap Button" || theme.value === "3D Button"){
		button.removeAttribute("class");
	}
	if(theme.value === "Bootstrap Button"){
		button.classList.add("btn");
		if(colorTheme.value === "Blue"){
			button.classList.add("btn-primary");
		}
		if(colorTheme.value === "Red"){
			button.classList.add("btn-danger");
		}
		if(colorTheme.value === "Yellow"){
			button.classList.add("btn-warning");
		}
		if(colorTheme.value === "Green"){
			button.classList.add("btn-success");
		}
		if(colorTheme.value === "Light"){
			button.classList.add("btn-light");
		}
		if(colorTheme.value === "Grey"){
			button.classList.add("btn-secondary");
		}
		if(colorTheme.value === "Dark"){
			button.classList.add("btn-dark");
		}
		if(colorTheme.value === "Light Blue"){
			button.classList.add("btn-info");
		}

		if(colorTheme.value === "Blue (outline)"){
			button.classList.add("btn-outline-primary");
		}
		if(colorTheme.value === "Red (outline)"){
			button.classList.add("btn-outline-danger");
		}
		if(colorTheme.value === "Yellow (outline)"){
			button.classList.add("btn-outline-warning");
		}
		if(colorTheme.value === "Green (outline)"){
			button.classList.add("btn-outline-success");
		}
		if(colorTheme.value === "Light (outline)"){
			button.classList.add("btn-outline-light");
		}
		if(colorTheme.value === "Grey (outline)"){
			button.classList.add("btn-outline-secondary");
		}
		if(colorTheme.value === "Dark (outline)"){
			button.classList.add("btn-outline-dark");
		}
		if(colorTheme.value === "Light Blue (outline)"){
			button.classList.add("btn-outline-info");
		}
	}
	if(theme.value === "3D Button"){
		button.classList.add("button-3d");
		if(colorTheme.value === "Red"){
			button.classList.add("button-3d-red");
		}
		if(colorTheme.value === "Green"){
			button.classList.add("button-3d-green");
		}
		if(colorTheme.value === "Yellow"){
			button.classList.add("button-3d-yellow");
		}
		if(colorTheme.value === "Blue"){
			button.classList.add("button-3d-blue");
		}
		if(colorTheme.value === "Grey"){
			button.classList.add("button-3d-grey");
		}
		if(colorTheme.value === "Light Blue"){
			button.classList.add("button-3d-lightblue");
		}
		if(colorTheme.value === "Dark"){
			button.classList.add("button-3d-dark");
		}
	}
}