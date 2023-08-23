//your code here
let input = document.getElementById("newTodoInput");
let button = document.getElementById("addTodoBtn");
let toDoList = document.getElementById("todoList");
button.addEventListner("click", () => {
	if(input.textContent != ""){
		toDoList.textContent = input.value;
	}
});
