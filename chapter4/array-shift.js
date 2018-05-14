let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift(task);
}

remember(1);
remember(2);
console.log(todoList);
console.log(getTask());
console.log(todoList);
rememberUrgently(3);
console.log(todoList);
