 


//  const counterDisplay = document.querySelector("h3");
// let counter = 0;
// const bubbleMaker = () => {
//   // tu lui dit de te créer un element span ensuite tu lui dit body tu as  element fils maintenant  bubble qui est span
//   const bubble = document.createElement("span");
//   bubble.classList.add("bubble");
//   document.body.appendChild(bubble);
//   const size = Math.random() * 200 + 100 + "px";
//   bubble.style.height = size;
//   bubble.style.width = size;
//   bubble.style.top = Math.random() * 100 + 50 + "%";
//   bubble.style.left = Math.random() * 100 + "%";

//   let plusMinus = Math.random() > 0.5 ? 1 : -1;
//   console.log(plusMinus);
//   const plusMinus = Math.random() > 0.5 ? 1 : -1;
//   bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

//   bubble.addEventListener("click", () => {
// @@ -28,7 +27,4 @@ const bubbleMaker = () => {
//   }, 8000);
// };

// setInterval(bubbleMaker, 100);
// // for (i = 0; i < 10000; i++) {
// //   bubbleMaker();
// // }
// setInterval(bubbleMaker, 1000);



const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000)