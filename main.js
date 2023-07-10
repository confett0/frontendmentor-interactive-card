const cardNumberInput = document.getElementById("number");
const cardNameInput = document.getElementById("name");
const cardMonthInput = document.getElementById("month");
const cardYearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCvc = document.querySelector(".card-cvc");


const form = document.getElementById("card-form");
const completeState = document.querySelector(".complete-state")

const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");

const completeButton = document.getElementById("complete");


const formatCardNumber = (number) => number.match(/.{1,4}/g).join(" ");

cardNumberInput.addEventListener("input", (e) => {
  numberError.textContent = "";
  if (!e.target.value) {
    cardNumber.textContent = "0000 0000 0000 0000";
  }
  cardNumber.textContent = formatCardNumber(e.target.value);
});

cardNameInput.addEventListener("input", (e) => {
  nameError.textContent = "";
  cardName.textContent = e.target.value;
  if (!e.target.value) {
    cardName.textContent = "Jane Appleseed";
  }
});

cardMonthInput.addEventListener("input", (e) => {
  dateError.textContent = "";
  cardMonth.textContent = e.target.value;
  if (!e.target.value) {
    cardMonth.textContent = "00";
  }
});

cardYearInput.addEventListener("input", (e) => {
  dateError.textContent = "";
  cardYear.textContent = e.target.value;
  if (!e.target.value) {
    cardYear.textContent = "00";
  }
});

cvcInput.addEventListener("input", (e) => {
  cvcError.textContent = "";
  cardCvc.textContent = e.target.value;
  if (!e.target.value) {
    cardCvc.textContent = "000";
  }
});

// Validation

const validateName = () => {
  const nameRegex = /^[\p{L} ,.'-]+$/u;
    if (!cardNameInput.value.match(nameRegex)) {
      nameError.textContent = "Wrong format";
    } if (cardNameInput.value === "") {
        nameError.textContent = "Can't be blank";
    }
}

const validateNumber = () => {
  const numberRegex = /^[0-9]{13,16}$/;
    if (!cardNumberInput.value.match(numberRegex)) {
      numberError.textContent = "Wrong format, numbers only";
    } if (cardNumberInput.value === "") {
        numberError.textContent = "Can't be blank";
    }
}

const validateDate = () => {
  const monthRegex = /(0[1-9]|1[012])/;
  const yearRegex = /\d{2}/;
    if (!cardMonthInput.value.match(monthRegex) || !cardYearInput.value.match(yearRegex)) {
      dateError.textContent = "Wrong format";
    } if (cardMonthInput.value === "" || cardYearInput.value === "") {
      dateError.textContent = "Can't be blank";
    }
}

const validateCvc = () => {
  const cvcRegex = /\d{3,4}/;
  if (!cvcInput.value.match(cvcRegex)) {
    cvcError.textContent = "Wrong format, numbers only";
  } if (cvcInput.value === "") {
      cvcError.textContent = "Can't be blank";
  }
}

const cardReset = () => {
  cardNumber.textContent = "0000 0000 0000 0000";
  cardName.textContent = "Jane Appleseed";
  cardMonth.textContent = "00";
  cardYear.textContent = "00";
  cardCvc.textContent = "000";

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateName();
    validateNumber();
    validateDate();
    validateCvc();
   if (nameError.textContent === "" && numberError.textContent === "" && dateError.textContent === "" && cvcError.textContent === "") {
    form.classList.add("hidden");
    completeState.classList.add("visible");
   }
   form.reset();
   cardReset();
})


completeButton.addEventListener("click", () => {
  form.classList.remove("hidden");
  completeState.classList.remove("visible");
});

