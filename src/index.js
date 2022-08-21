document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form'); //grab form tag

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // pass the added task as argument to addToList()
    addToList(event.target['new-task-description'].value)

    // reset the form once a user adds a task
    form.reset();
  })
});

// Create a function that adds the task to MyToDos
function addToList(task){
  let ul = document.querySelector('#tasks') // get ul tag
  
  // Create a list element for the task added
  let li = document.createElement('li');
  li.textContent = `${task} `;

  // Add delete button to the list element
  let btn = document.createElement('button');
  btn.textContent = 'X';

  // append the button as a child of the list element
  li.appendChild(btn)

  // Give the button the rights to delete a task. 
  // I will add an event listener to the button so that it deletes a task on click
  btn.addEventListener('click', deleteTask)

  // append the list element as a child of the ul element
  ul.appendChild(li);
}

//  Create a function to delete tasks
// The target is the parentNode of the button, which is a list(task added)
// This will enable me delete a 'complete task' from the list
function deleteTask(e){
  e.target.parentNode.remove()
};
