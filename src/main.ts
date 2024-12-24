const input = document.getElementById("write") as HTMLInputElement;
const button = document.getElementById("sendButton") as HTMLButtonElement;
const feedback = document.getElementById("feedback");


button?.addEventListener("click",()=>{
  const inputvalue = input.value;
  const numValue = Number(inputvalue);
  
  if(numValue >=1 && numValue<=100){
    feedback!.innerHTML = input.value;

  } else{
    feedback!.innerHTML ="Please enter a number between 1 and 100"
  }

})


