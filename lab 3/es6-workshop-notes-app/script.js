class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    // klassikaal
    let newNote = document.createElement('div'); // <div>
    newNote.setAttribute("class", "card"); // <div class="card">

    let newP = document.createElement("p"); // <p>Todo</p>
    newP.innerHTML = title;
    newNote.appendChild(newP); // <div class="card"><p>Todo</p>

    // in samenwerking met Ilke Cauwenberg
    let newA = document.createElement("a");
    newA.setAttribute("class", "card-remove");
    newA.innerHTML = "Remove";
    newNote.appendChild(newA);

    newA.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // klassikaal
    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    // me + bron: https://www.youtube.com/watch?v=k8yJCeuP6I8
    let localNote = JSON.parse(localStorage.getItem('title')) || [];
    localNote.push(this.title);
    localStorage.setItem('title', JSON.stringify(localNote));
    console.log(localStorage);
    console.log(localNote);
  }

  remove() {
    // in this function, 'this' will refer to the current note element
    localStorage.removeItem('title');
    this.remove();
  }
}

class App {
  constructor() {
    // HINT🤩
    // clicking the button should work
    // klassikaal
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    // pressing the enter key should also work
    // in samenwerking met Ilke Cauwenberg
    this.enter = document.querySelector('input');
    this.enter.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.querySelector("#btnAddNote").click();
      }
    });

    // me
    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // me + bron: https://codepen.io/goodbytes/pen/ExjRGGx?editors=1010
    let items = JSON.parse(localStorage.getItem('title')) || [];
    items.forEach(localNote => {
      let note = new Note(localNote);
      note.add();
    });
  }

  createNote(e) {
    // this function should create a new note by using the Note() class

    // klassikaal
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();

    // me
    note.saveToStorage();
    //this.reset();
  }

  reset() {
    // this function should reset the form
    // me + bron: https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
    //localStorage.clear();
  }

}

let app = new App();