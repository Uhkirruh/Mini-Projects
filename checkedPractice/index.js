const myCheckBox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myVisa");
const myMasterCard = document.getElementById("myMasterCard");
const myPayPal = document.getElementById("myPayPal");
const myButton = document.getElementById("myButton");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

myButton.onclick = () => {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are NOT subscribed!";
  }

  if (myVisa.checked) {
    payResult.textContent = "You are using Visa for payment";
  } else if (myMasterCard.checked) {
    payResult.textContent = "You are using Master Card for payment";
  } else if (myPayPal.checked) {
    payResult.textContent = "You are using PayPal for payment";
  } else {
    payResult.textContent = "You need to select a payment method!";
  }
};
