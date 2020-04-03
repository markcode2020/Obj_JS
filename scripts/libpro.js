// declare an array for library to keep books.
let myLibrary =[];

function print() {
  console.log(ip_author);
  document.getElementById("book").innerHTML = ip_author;
}

function book(author, title, pages, read) {
  //the contructor
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
}

var message =""
function addBookToLibrary() {
  // do stuff here
  var ip_author =document.getElementById('author').value;
  let ip_title = document.getElementById('title').value;
  let ip_pages = document.getElementById('pages').value;
  let ip_read = document.getElementById('read').value;
  let book1 = new book(ip_author, ip_title, ip_pages, ip_read);
  myLibrary.push(book1);
  message = book1.title + " by " + book1.author + ", " + book1.pages + " pages, " +book1.read;
  document.getElementById('book').innerHTML = message;

  var lib_text = "";
  var i = 0;
  var n = 1;

  while (i<myLibrary.length) {
      lib_text += "[" + n + "]: " + myLibrary[i].title + " <br> <br>";
      n++;
      i++;
  }

  document.getElementById("lib").innerHTML = lib_text;
}

function sum(){
  let a=1;
  let b=2;
  return console.log(a+b);
}
