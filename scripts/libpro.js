// declare an array for library to keep books.
let myLibrary = [];
let a = 2;
console.log(a);
console.log('this is a test string');

function book(author, title, pages, read) {
  //it is a mistake to use constructor without using keyword new.
  //when constructor is called, check whether this is an instanceof book
  if (!(this instanceof book)){
    return new book();
  }
  //the contructor
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
}

let message = ''
function addBookToLibrary() {
  // do stuff here
  let ipAuthor = document.getElementById('author').value;
  let ipTitle = document.getElementById('title').value;
  let ipPages = document.getElementById('pages').value;

  if (document.getElementById('read').checked){
    var ipRead = 'Read';
  }
  else if (document.getElementById('not_read').checked) {
    var ipRead = 'Not Yet Read';
  }

  let book1 = new book(ipAuthor, ipTitle, ipPages, ipRead);
  myLibrary.push(book1);
  message = '<p><br>"' + book1.title + '" by '  + book1.author + ', ' + book1.pages + ' pages, has been added.<br></p>';
  document.getElementById('book').innerHTML = message;
  render()
}

//render funcion is to creat a html table base on the latest data in myLibrary
function render (){
  var i = 0;
  let hTable = '';
  hTable = hTable + '<table><tr><th>Title</th><th>Author</th><th>Status</th><th>Read</th><th>Delete</th></tr>'

  while (i < myLibrary.length) {
      hTable += '<tr><td>' + myLibrary[i].title + '</td><td>' + myLibrary[i].author + '</td><td>' + myLibrary[i].read + '</td>';
      hTable += "<td><button class = 'button' type='button' id = '" + i + "' onclick='readStatusUpdate(this.id)'>Update</button></td>";
      hTable += "<td><button class = 'button' type='button' id = '" + i + "' onclick='removeBookFromLibrary(this.id)'>Delete</button></td></tr>";
      i++;
  }
  hTable = hTable + '</table>'
  //console.log(h_table)
  document.getElementById('lib_table').innerHTML = hTable;
}

function removeBookFromLibrary(rowId){
  let bookIndex = Number(rowId);
  //splice method to remove element(s) from array by specified index and number of elements
  //here is to remove 1 element from the position of book_index
  myLibrary.splice(bookIndex, 1);
  render()
}

function readStatusUpdate(rowId){
  let bookIndex = Number(rowId);

  if (myLibrary[bookIndex].read === 'Read'){
    myLibrary[bookIndex].read = 'Not Yet Read'
  }
  else if (myLibrary[bookIndex].read === 'Not Yet Read') {
    myLibrary[bookIndex].read = 'Read'
  }
  render()
}

function makeList(){
  var tbl = document.createElement('table');
  var r = 0;
  var c = 0;

  for (r = 1; r < 5; r++) {
    var row =  document.createElement('tr');
    for (c = 1; c < 5; c++) {

      if (r === 1) {
        var cell = document.createElement('th');
        cell.innerHTML = 'header' + c;
        row.appendChild(cell);
      } else if (r >= 2) {
        cell = document.createElement('td');

        if (c === 4) {
          var btn = document.createElement('button')
          btn.addEventListener('click', changeCells);
          btn.innerHTML = 'update';
          cell.appendChild(btn);
        } else {
          cell.innerHTML = 'cell' + c;
        }
        row.appendChild(cell);
      }
    }
    tbl.appendChild(row);
    }
  document.body.appendChild(tbl);
}

function changeCells (e) {
  const elem = e.target
  const pNode = elem.parentNode.parentNode
  console.log(pNode);
  console.log(pNode.childNodes.length);
  for (let i = 0, l = (pNode.childNodes.length - 2); i < l; i++ ){
    pNode.childNodes[i].style.backgroundColor = 'green';
    pNode.childNodes[i].style.fontStyle = 'italic';
  }
}
makeList()


function toggleClass(elem, className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className, '');
	}
	else {
    console.log(elem.className);
		//elem.className = elem.className.replace(/\s+/g, ' ') + 	' ' + className;
    elem.className = elem.className + 	' ' + className;
	}

	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;

	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else {
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.language');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu, 'hide');
	toggleClass(icon, 'rotate-90');
}

const dropdownTitle = document.querySelector('.dropDown .title');
dropdownTitle.addEventListener('click', toggleMenuDisplay);
