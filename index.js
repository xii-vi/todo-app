var itemAdd = document.getElementById('entertask');
var btnAdd = document.getElementById('additem');
var ulList = document.getElementById('listItem')

btnAdd.addEventListener('click', () => {
    if (itemAdd.value === "") {
        alert("Please Enter the task first to add to TO-DO List")
    } else {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(itemAdd.value);
        ulList.appendChild(newListElement);
        newListElement.appendChild(textNode);
        newListElement.id = "item" + ulList.childElementCount;
        newListElement.classList.add("todo-list");
    }
})

itemAdd.addEventListener('keydown', function (event) {
    var keyPressed = event.key;
    if (keyPressed === "Enter" && itemAdd.value === "") {
        alert("Please Enter the task first to add to TO-DO List")
    } else if (keyPressed === "Enter") {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(itemAdd.value);
        ulList.appendChild(newListElement);
        newListElement.appendChild(textNode);
        newListElement.id = "item" + ulList.childElementCount;
        newListElement.classList.add("todo-list");
    }
})