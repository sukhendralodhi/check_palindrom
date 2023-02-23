const inputField = document.getElementById("input");
const Btn = document.getElementById("checkBtn");
let resultHolder = document.querySelector(".result");


const checkPalindrom = () => {
  let palindrom = inputField.value.split("").reverse().join("");
  if (inputField.value == '') {
    inputField.style.borderColor = 'red';
  }
  else if (inputField.value === palindrom) {
    resultHolder.innerText = `${palindrom} is Palindrom`;
    inputField.style.borderColor = 'purple';
  } else {
    resultHolder.innerText = `${palindrom} is not Palindrom`;
    inputField.style.borderColor = 'purple';
  }
};

Btn.addEventListener("click", () => {
  console.log(inputField.value);
  checkPalindrom();
  inputField.value = "";
});
