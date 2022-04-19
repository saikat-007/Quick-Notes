let addbtn = document.getElementById("addbtn");
showNote();

// to add notes

addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  showNote();
});

// to show added notes

function showNote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1} </h5>
          <p class="card-text">${element}</p>
          <a href="#" class="btn btn-primary" onclick="deleteNote(this.id)" id="${index}">Delete</a>
        </div>
      </div>`;
  });

  let noteElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = `Nothing to Show . Use "Add note" to create a note`;
  }
}

//function to delete note

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNote();
}


//search bar

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input",function(){
    let inputVal = searchTxt.value;
    console.log(inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    })
})