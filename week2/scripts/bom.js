console.log('hello')

// Declare variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul#list'); // or document.querySelector('#list')

// Add an event listener to the Add Chapter button
button.addEventListener('click', () => {
  // Check to make sure the input is not blank
  if (input.value.trim() !== '') {
    // Create a li element that will hold each entry's chapter title and an associated delete button
    const li = document.createElement('li');
    const chapterText = document.createTextNode(input.value);
    li.appendChild(chapterText);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', () => {
      // Remove the li element when clicked
      li.remove();
    });

    // Append the delete button to the li element variable
    li.appendChild(deleteButton);

    // Append the li element variable to the unordered list in your HTML
    list.appendChild(li);

    // Change the input value to nothing or the empty string
    input.value = '';
  } else {
    // Provide a message or do nothing and return the focus to the input field
    alert('Please enter a chapter title');
  }

  // Send the focus to the input element
  input.focus();
});



