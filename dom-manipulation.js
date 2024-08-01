// Get the form and table elements
const form = document.getElementById('info-form');
const table = document.querySelector('#info-table table');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const nameError = document.createElement("div");
nameError.style.color = "red";
nameError.style.fontSize = "11px";
nameInput.parentNode.appendChild(nameError);

const emailError = document.createElement("div");
emailError.style.color = "red";
emailError.style.fontSize = "11px";
emailInput.parentNode.appendChild(emailError);

const numberError = document.createElement("div");
numberError.style.color = "red";
numberError.style.fontSize = "11px";
numberInput.parentNode.appendChild(numberError);

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  
  let isValid = true;

  if(!nameInput.value){
    nameError.textContent = "Please enter your name";
    isValid = false;
  } else{
    nameError.textContent = ""
  }
  if (!emailInput.value) {
    emailError.textContent = "Please enter an email";
    isValid = false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }
  if (!numberInput.value) {
    numberError.textContent = " Please enter your phone number";
    isValid = false;
  } else if(numberInput.value.length !== 10 || isNaN(numberInput.value) || !/^\d+$/.test(numberInput.value)) {
    numberError.textContent = "Please enter a valid phone number";
    isValid = false;
  } else {
    numberError.textContent = "";
  }

  if (isValid) {
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    // Create a new table row element
    const row = document.createElement('tr');

    // Create table data elements for each input value
    const nameCell =document.createElement('td');
    const emailCell = document.createElement('td');
    const numberCell = document.createElement('td');

    // Set the text content of each table data element
    nameCell.textContent = name;
    emailCell.textContent = email;
    numberCell.textContent = number;

    // Append the table data elements to the table row
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(numberCell);

    // Append the table row to the table
    table.appendChild(row);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
  }
});



