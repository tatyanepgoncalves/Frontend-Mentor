const input = document.querySelector("input");
const spinner = document.querySelector(".spinner");
const btn = document.querySelector("btn")

const updateUI = (value) => {
  console.log("value", value);

  spinner.classList.remove("visible");
  btn.disabled = invalid;
  
}


const handleStartTyping = () => {
  spinner.classList.add("visible");
}

