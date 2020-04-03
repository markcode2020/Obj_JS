function student (){

};

// "this" is interprated when it is called, "this" refers to
// the object right before the dot.
student.prototype.sayName = function () {
  console.log(this.name)
};

function EighthGrade(name) {
    this.name = name
    This.grade = 8
};

EighthGrade.prototype = Object.create (student.prototype);

const carl = new EighthGrade("carl");

carl.sayName();

carl.grade;//8


//example of inheritance
let head = {
  glasses :1
};

let table = {
  pen:3,
  __proto__:head
};

let bed = {
  sheet : 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money : 2000,
  __proto__: bed
}

console.log(bed.pen)
console.log(packets.glasses)
