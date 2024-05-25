document.getElementById('addBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value;
    
    if (task) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' ' + task));
        
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
