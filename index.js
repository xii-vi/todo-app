var itemAdd = document.getElementById('entertask');
var btnAdd = document.getElementById('additem');
var ulList = document.getElementById('listItem')

function addListItem() {
    if (itemAdd.value !== "") {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(itemAdd.value);
        ulList.appendChild(newListElement);
        newListElement.appendChild(textNode);
        newListElement.id = "item" + ulList.childElementCount;
        newListElement.classList.add("todo-list");
    } else {
        alert("Please Enter the task first to add to TO-DO List")
    }
}

itemAdd.addEventListener('keyup', function (event) {
    var keyPressed = event.key;
    if (keyPressed === "Enter") {
        addListItem();
    }
})

btnAdd.addEventListener('click', addListItem)
