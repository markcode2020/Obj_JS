function book (title, author, pages, read){
  this.title=title
  this.author = author
  this.pages= pages
  this.read = read
  message = title + " by " + author  + " , " + pages + " pages, " + read
  this.info = function () {
    return message
  }
}
