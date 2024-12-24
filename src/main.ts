const input = document.getElementById("write") as HTMLInputElement;
const button = document.getElementById("sendButton") as HTMLButtonElement;
const feedback = document.getElementById("feedback");
const rand = Math.floor(Math.random() * 100) + 1;  
const div1 = document.createElement("div");
const textNode = document.createTextNode(rand.toString());
div1.appendChild(textNode);
document.body.appendChild(div1);

button?.addEventListener("click", () => {
  const inputvalue = input.value;
  const numValue = Number(inputvalue);

  if (numValue >= 1 && numValue <= 100) {
    if (rand > numValue) {
      feedback!.innerHTML = "Too low";
    } else if (rand < numValue) {
      feedback!.innerHTML = "Too high";
    } else {
      feedback!.innerHTML = "Correct!";
    }
  } else {
    feedback!.innerHTML = "Please enter a number between 1 and 100.";
  }
});
