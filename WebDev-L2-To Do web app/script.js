function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} <small style="color:#888;">(${new Date().toLocaleString()})</small></span>
        <div class="actions">
            <button class="complete-btn" onclick="completeTask(this)">✔</button>
            <button class="delete-btn" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    document.getElementById('pending-list').appendChild(li);
    input.value = '';
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    button.remove(); // Remove checkmark button
    document.getElementById('completed-list').appendChild(li);
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}