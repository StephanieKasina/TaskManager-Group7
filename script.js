function renderTasks() {
  var list = document.getElementById('taskListSection');
  list.innerHTML = '';
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = '<strong>' + task.title + '</strong>' +
      '<span class="badge ' + task.priority.toLowerCase() + '">' + task.priority + '</span>' +
      '<p>Due: ' + task.date + '</p>' +
      '<button onclick="editTask(' + task.id + ')">Edit</button>' +
      '<button onclick="deleteTask(' + task.id + ')">Delete</button>';
    makeDraggable(card, i);
    list.appendChild(card);
  }
}
//=====RENDER FUNCTION