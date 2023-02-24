// variable declration 
const inputField = document.getElementById("input");
const btn = document.getElementById("checkBtn");
let resultHolder = document.querySelector(".result");
let word = inputField.value;

// function using substring method 
const subStringMethod = () => {
  let word = inputField.value;
  let len = inputField.value.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");

  if (word === "") {
    inputField.style.borderColor = "red";
  } else if (start == flip) {
    // console.log('Palindrom');
    resultHolder.innerText = `${word} is Palindrom`;
    inputField.style.borderColor = "purple";
  } else {
    // console.log('Not palindrom');
    resultHolder.innerText = `${word} is not Palindrom`;
    inputField.style.borderColor = "purple";
  }
};


// function using inbuild methods 
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

// event listener 
btn.addEventListener("click", () => {
  // checkPalindrom();
  subStringMethod();
  inputField.value = "";
});
