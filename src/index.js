document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById('create-task-form');
  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('new-task-description').value
    const tasksList = document.getElementById('tasks')
    taskList.appendChild(`<li>${inputValue}</li>`);
  });
});
