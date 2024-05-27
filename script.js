document.getElementById('addBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    
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
