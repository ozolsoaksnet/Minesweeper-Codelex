// array (mutable) containing the todo items 
const items = [
    { name: 'Watch JS tutorial', isDone: true },
    { name: 'Do JS excersises', isDone: false }
]

const form = document.getElementById('form');
const inputElement = document.getElementById('userInput');
const addButton = document.getElementById('enter');

// whenever form submit event happens, we create and add a new item
form.addEventListener('submit', (xyz) => {
    // prevent the browser from reloding the page
    xyz.preventDefault();

    // Get the value of the name of the todo in input field
    const name = inputElement.value;
    // Dont add eampty todos
    if (!name) return;
    const newItem = {
        name,
        isDone: false
    };
    items.push(newItem);
    // Re-render the list with the new state
    drawList();
    input.value = "";
});

// A function called to render & reflect the new state of items in browser

function drawList() {
    const list = document.getElementById('list');
    // Reset the list and make it eampty
    list.innerHTML = "";

    list.innerText = "";
    for (let i in items) {
        let item = items[i]
        const li = document.createElement('li')
            // Handle done/notDone toggling for every list item
        li.addEventListener('click', () => {
            item.isDone = !item.isDone
            li.className = item.isDone ? "done" : "";
        });
        // Set the proper class to indicate if item is done
        if (item.isDone) {
            li.className = 'done'
        }
        li.innerText = item.name;
        const btn = document.createElement('button')
        btn.innerText = "X";
        // Handle  deleting todo list items.
        btn.addEventListener('click', () => {
            items.splice(i, 1)
            drawList()
        });

        li.appendChild(btn);
        list.appendChild(li);
    }
}
drawList()