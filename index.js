// selecteur
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4")
// Evenement click
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");



// on lui ajoute  un paramettre(evenement) et deuxieme chose on lui dit ce qui va se passé aprés qu'on es touché ce paramettre
questionContainer.addEventListener('click', () => {
questionContainer.classList.toggle("question-clicked");
});



btn1.addEventListener("click", () =>{
	response.classList.add("show-response");
	response.style.background = "green";
});

btn2.addEventListener("click", () => {
	response.classList.add("show-response");
	response.style.background = "red";
});
// fin de click

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove" , (e) => {
	mousemove.style.left = e.pageX + "px";
	mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
	mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
	mousemove.style.transform = "scale(1) translate(-50%, -50%)";
	mousemove.style.border = "2px solid teal";
});

// tu lui di dis que le souris passe au dessus de toi realise moi cette action
questionContainer.addEventListener("mouseenter", () => {
	questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
	questionContainer.style.background = "pink";
});

questionContainer.addEventListener("mouseover", () => {
	response.style.transform = "rotate(2deg)";
});

// ......fin de mouse.........

// keypress event  le e sert à recuperer les données
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// ajouter un son en javascript:on créer déja une fonction ensuite on créer un objet avec new ensuite on met la source enfin on l'appel
const ring = (key) => {
	const audio = new Audio();
	audio.src = key + ".mp3";
	audio.play();
}

document.addEventListener("keypress", (e) => {
	key.textContent = e.key;


if (e.key === "j") {
	keypressContainer.style.background = "pink"; 
}

else if (e.key === "h") {
	keypressContainer.style.background = "teal";
}

else {
	keypressContainer.style.background = "red";
}

// audio pour mou marcher quand on appui sur une touche
if (e.key === "z") ring(e.key);
});	

// scroll event avec le navbar  scrollY revéle la dimension a parcourir pour faire apparaitre le navbar
const nav = document.querySelector("nav");

window.addEventListener("scroll" , () => {

if (window.scrollY > 120){
	nav.style.top = 0;
}

else {
	nav.style.top = "-50px";
}
})

// fin de scroll

// form events
// e.target pour recuperer la valeur qui écris dans le input
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value
});

select.addEventListener("input", (e) => {
	language = e.target.value;
});

// prevent default c'est pour que ca te ramene pas sur une autre page aprés avoir valideé le form
form.addEventListener("submit", (e) => {
	e.preventDefault();

// innerhtml non seulement ca ajoute du texte mais aussi ca ajoute des balise form>div cela veut dire injecte moi la balise dans le fils div de form
if (cgv.checked) {
  document.querySelector("form > div").innerHTML = `
<h3>Pseudo : ${pseudo}</h3> 
<h4>langage prefere : ${language}</h4>

  `;
  
  
  
} else {
	alert ("veuillez accepter les cgv");
}
});

// ------------------------------------------
// for each pour chacun on utilise getElementByClassName =getSelectorAll quand on a plusieurs class avec le meme nom 
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("click", (e) => {
		e.target.style.transform = "scale(0.7)";
	});
});

// ----------fin de each---------------------------
// addEvenlistener vs onclick onclick pas trop recommander mais c'est la meme chose

// ---------------usecapture plus recommander que----------
document.body.addEventListener(
	"click",
	() => {
		console.log("click 2 !");
	},
		true
	);

// que le bubbling
document.body.addEventListener("click", () => {
		console.log("click 2 !");
	},
	);


// stopPropogation si tu veux qu'un element en écrase un autre
questionContainer.addEventListener("click", (e) => {
	alert("test !");
	e.stopPropogation();
})
