let TaskApp = {
    selectElement: function() {
        this.taskInputField = document.getElementById("task-input");
        this.taskListUl = document.getElementById("listItems");
        this.taskListChild = this.taskListUl.children;
        this.addTaskBtn = document.getElementById("addTodoBtn");
        this.errorMsg = document.getElementById("errorMsg");
    }
};