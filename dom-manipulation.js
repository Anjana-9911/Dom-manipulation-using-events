// Get the form and table elements
const form = document.getElementById('info-form');
const table = document.querySelector('#info-table table');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

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
});



