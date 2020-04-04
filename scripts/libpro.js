// declare an array for library to keep books.
let myLibrary =[];

function book(author, title, pages, read) {
  //the contructor
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
}

let message =""
function addBookToLibrary() {
  // do stuff here
  let ip_author =document.getElementById('author').value;
  let ip_title = document.getElementById('title').value;
  let ip_pages = document.getElementById('pages').value;

  if (document.getElementById('read').checked){
    var ip_read = "Read";
  }
  else if (document.getElementById('not_read').checked) {
    var ip_read = "Not Yet Read";
  }

  let book1 = new book(ip_author, ip_title, ip_pages, ip_read);
  myLibrary.push(book1);
  message = '<p><br>"' + book1.title + '" by '  + book1.author + ', ' + book1.pages + ' pages, has been added.<br></p>';
  document.getElementById('book').innerHTML = message;
  render()
}

//render funcion is to creat a html table base on the latest data in myLibrary
function render (){
  i=0;
  let h_table ="";
  h_table = h_table +"<table><tr><th>Title</th><th>Author</th><th>Status</th><th>Read</th><th>Delete</th></tr>";

  while (i<myLibrary.length) {
      h_table += "<tr><td>" + myLibrary[i].title + "</td><td>" + myLibrary[i].author + "</td><td>" + myLibrary[i].read +"</td>";
      h_table += "<td><button class = 'button' type='button' id = '" + i +"' onclick='readStatusUpdate(this.id)'>Read</button></td>";
      h_table += "<td><button class = 'button' type='button' id = '" + i +"' onclick='removeBookFromLibrary(this.id)'>Delete</button></td></tr>";
      i++;
  }
  h_table = h_table +"</table>"
  //console.log(h_table)
  document.getElementById("lib_table").innerHTML = h_table;
}

function removeBookFromLibrary(row_id){
  let book_index = Number(row_id);
  //splice method to remove element(s) from array by specified index and number of elements
  //here is to remove 1 element from the position of book_index
  myLibrary.splice(book_index, 1);
  render()
}

function readStatusUpdate(row_id){
  let book_index = Number(row_id);

  if (myLibrary[book_index].read==="Read"){
    myLibrary[book_index].read = "Not Yet Read"
  }
  else if (myLibrary[book_index].read==="Not Yet Read") {
    myLibrary[book_index].read = "Read"
  }
  render()
}
