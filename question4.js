let tasks = []; // Array to store tasks
let taskId = 1; // Auto-incrementing ID

// Create a task
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log(`Task added: ${JSON.stringify(task)}`);
}

// Read all tasks
function viewTasks() {
    console.log("Task List:", tasks);
}

// Update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${JSON.stringify(deletedTask[0])}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example Usage:
addTask("Buy groceries", "Milk, Eggs, Bread");
addTask("Finish project", "Complete the JavaScript task manager");
viewTasks();
updateTask(1, "Buy groceries and fruits", "Milk, Eggs, Bread, Apples");
deleteTask(2);
viewTasks();
