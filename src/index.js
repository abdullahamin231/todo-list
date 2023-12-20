let todoList = [];
let notesList = [];
import {createTodo,handleCreateButton, createNote} from "./todo.js"
import {handleRendering, renderNotes, createTodoForm, createNoteForm} from "./rendering.js";
const main = document.getElementById('main');
let createWhat = 'todo';
getFromLocalStorage();

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if(createWhat == 'todo'){
        const title = document.getElementById('textarea-title').value;
        const details = document.getElementById('textarea-details').value;
        const date = document.getElementById('modal-date').value;
        const done = false;
        let selectedP = document.getElementById('priority').value;    
        const newTodo = createTodo(title, details, date, selectedP, done);
        console.log(newTodo);
        todoList.push(newTodo);
        localStorage.setItem("todoList", JSON.stringify(todoList));
    } else if (createWhat == 'note'){
        const title = document.getElementById('textarea-title').value;
        const details = document.getElementById('textarea-details').value;
        const newNote = createNote(title, details);
        console.log(newNote);
        console.log(notesList);
        notesList.push(newNote);
        localStorage.setItem("notesList", JSON.stringify(notesList));
    }
    main.style.filter = 'blur(0px)';
    document.getElementById('modal').style.visibility = document.getElementById('modal').style.visibility == "visible" ? "hidden" : "visible" ;
    window.location.reload();
});

handleRendering('home');
handleCreateButton();

const todoBtn = document.getElementById('Btntodo');
todoBtn.addEventListener('click', ()=>{
    createWhat = 'todo';
    createTodoForm();
})
const projectBtn = document.getElementById('Btnproject');
projectBtn.addEventListener('click', ()=>{
    createWhat = 'project';
})
const noteBtn = document.getElementById('Btnnote');
noteBtn.addEventListener('click', ()=>{
    createWhat = 'note';
    createNoteForm();
})
const todayBtn = document.getElementById('today');
todayBtn.addEventListener("click", function(){
    resetButtonBorders();
    todayBtn.style.border = '1px solid #3A3A3A';
    handleRendering('today');
});

const homeBtn = document.getElementById('home');
homeBtn.addEventListener("click", () => {
    resetButtonBorders();
    homeBtn.style.border = '1px solid #3A3A3A';
    handleRendering('home');
});

const weekBtn = document.getElementById('week');
weekBtn.addEventListener("click", () => {
    resetButtonBorders();
    weekBtn.style.border = '1px solid #3A3A3A';
    handleRendering('week');
});

const notesBtn = document.getElementById('notes');
notesBtn.addEventListener("click", ()=>{
    renderNotes();
})



const closeBtn = document.getElementById('modal-top-close');
closeBtn.addEventListener("click", ()=>{
    main.style.filter = 'blur(0px)';
    document.getElementById('modal').style.visibility = document.getElementById('modal').style.visibility == "visible" ? "hidden" : "visible";
})
const closeDetailsBtn = document.getElementById('detailsModal-top-close');
closeDetailsBtn.addEventListener("click", ()=>{
    main.style.filter = 'blur(0px)';
    document.getElementById('detailsModal').style.visibility = "hidden";
})
const closeEditBtn = document.getElementById('editModal-top-close');
closeEditBtn.addEventListener("click", ()=>{
    main.style.filter = 'blur(0px)';
    document.getElementById('editModal').style.visibility = "hidden";
})


// const detailsBtn = document.querySelectorAll('#todo-details-btn');
// detailsBtn.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
        //         const index = e.currentTarget.dataset.index;
        //         console.log('details was ran');
        //         showDetails(index);
        //     })
        // })
        
        // const editBtn = document.querySelectorAll('.todo-edit');
        // editBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const index = e.currentTarget.dataset.index;
//         console.log('edit button aws ran');
//         handleEditing(index);
//     })
// })

// const deleteBtn = document.querySelectorAll('.todo-delete');
// deleteBtn.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
        //         const index = e.currentTarget.dataset.index;
        //         todoList.splice(index, 1);
        //         updateLocalStorage();
        //         window.location.reload();
        //     });
        // });
        
        
function updateLocalStorage(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
function getFromLocalStorage(){
    const gottenList = localStorage.getItem("todoList");
    if(gottenList){
        todoList = JSON.parse(gottenList);
    }
    const gottenNotes = localStorage.getItem("notesList");
    if(gottenNotes){
        notesList = JSON.parse(gottenNotes);
    }
}
function resetButtonBorders() {
    todayBtn.style.border = 'none';
    homeBtn.style.border = 'none';
    weekBtn.style.border = 'none';
}