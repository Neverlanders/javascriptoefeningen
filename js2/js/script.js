//ES5
const myClass = document.querySelectorAll('.resultaat');
var myArray = Array.prototype.slice.call(myClass);

myArray.forEach(function(el){
   el.style.color = "red";
});

//ES6
/*Array.from(document.querySelectorAll('.resultaat')).forEach(el => el.style.color = "green");
Array.from(myClass).forEach(el => el.style.color = "green");*/
myArray.forEach(el => el.style.color = "green");

myClass.forEach(el => el.style.color="blue");