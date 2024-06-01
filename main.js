const form = document.getElementById("form");
const message = document.getElementById("inputError");
const input = document.getElementById("email");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  const found = inputValue.match(regex);

  // IF EMAIL IS VALID/REGEX MATCHES
  if (found) {
    input.style.border = "1px solid #50c878";
    message.innerText = "Valid Email";
    message.style.color = "#50c878";
    message.style.marginBottom = "1rem";
    // console.log(inputValue);

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #c2d3ff";
      message.innerText = "";
    }, 2000);
  } else if (inputValue === "") {
    input.style.border = "1px solid #ff5263";
    message.innerText = "Whoops! It looks like you forgot to add your email";
    message.style.color = "#ff5263";
    message.style.marginBottom = "1rem";

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #c2d3ff";
      message.innerText = "";
    }, 2000);
  } else {
    input.style.border = "1px solid #ff5263";
    message.innerText = "Please provide a valid email address";
    message.style.color = "#ff5263";
    message.style.marginBottom = "1rem";

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #c2d3ff";
      message.innerText = "";
    }, 2000);
  }
});
