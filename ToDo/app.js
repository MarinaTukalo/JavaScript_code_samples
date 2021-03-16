const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const todo = form.newTodo.value.trim(); // trim method to remove white spaces before or after
    // console.log(todo);
    if (todo.length) { // to prevent adding empty space 
        generateTemplate(todo);
        form.reset();
    }
});

//// delete todos:
list.addEventListener('click', e => {
    //console.log(e.target.innerHTML);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//// live search
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
    // to remove class "filtered"
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});