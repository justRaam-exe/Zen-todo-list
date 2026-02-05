// Create Delete Btn and append it to each list item
var taskNodeList = document.getElementsByTagName("LI");
var i;
const deleteLogo = `
<svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
</svg>`;
for (i = 0; i < taskNodeList.length; i++) {
    var newSpanList = document.createElement("SPAN");
    var logoText = document.createTextNode(deleteLogo);
    newSpanList.className = "deleteBtn";
    newSpanList.appendChild(logotext);
    taskNodeList[i].appendChild(newSpanList);
}

// When Click Delete Btn, Hide the current task Item
var deletBtnList = document.getElementsByClassName("deleteBtn");
var i;
for (i = 0; i < deletBtnList.length; i++) {
    deletBtnList[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add Checked symbol when click on a task item
