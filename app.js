// chapter 38-42
// task 1
// function power(a, b) {
//   var result = a ** b;
//   alert(result);
// }
// power(prompt("Value of a"), prompt("Value of b"));
// task 2

// task 3
// var a = +prompt("Enter the value of first side of triangle");
// var b = +prompt("Enter the value of second side of triangle");
// var c = +prompt("Enter the value of third side of triangle");
// var s = (a + b + c) / 2;
// var area = s * (s - a) * (s - b) * (s - c);
// alert(area);
// task 4
// function marks() {
//   var sub1 = +prompt("Enter marks of first subject");
//   var sub2 = +prompt("Enter marks of second subject");
//   var sub3 = +prompt("Enter marks of third subject");
//   var total = sub1 + sub2 + sub3;
//   var ave = total / 3;
//   var per = (total * 100) / 300;
//   alert(
//     "Marks of subject 1 is " +
//       sub1 +
//       "\n" +
//       "Marks of subject 2 is " +
//       sub2 +
//       "\n" +
//       "Marks of subject 3 is " +
//       sub3 +
//       "\n" +
//       "average marks is: " +
//       ave +
//       "\n" +
//       "Your percentage is: " +
//       per
//   );
// }
// marks();
// task 5

// task 6

// task 7

// chapter 43-48
// task 1
// function mobile() {
//   alert("Please give me the Linux Certification");
// }
// task 2
// function price() {
//   alert("price: 5000$");
// }
// function price2() {
//   alert("price: 10,000$");
// }
// function price3() {
//   alert("price: 15,000$");
// }
// task 3
// function rowdel() {
//   var del = document.querySelector(".del");
//   del.parentElement.parentElement.remove();
// }
// task 4
// function swap() {
//   var bird = (document.getElementById("bird1").src = "images/bird3.jpg");
// }
// function swapback() {
//   var bird = (document.getElementById("bird1").src = "images/bird1.jpg");
// }
// task 5
// function increase() {
//   var count = document.getElementById("count");
//   count.innerHTML++;
// }

// function decrease() {
//   var count = document.getElementById("count");
//   count.innerHTML--;
// }

// chapter 49-52
// task 1

// task 2
// function read() {
//   var para = document.getElementById("para1");
//   para.style.height = "550px";
// }
// task 3

// chapter 58-67
// task 1
// var main = document.getElementById("main-content");
// console.log(main.children);
// var render = document.getElementsByClassName("render");
// console.log(render);
// var first = (document.getElementById("first-name").value = "Hashir");
// var last = (document.getElementById("last-name").value = "Khan");
// var email = (document.getElementById("email").value = "hashirk966@gmail.com");
// task 2
// var form = document.getElementById("form-content").nodeType;
// console.log(form);
// var lastName = document.getElementById("lastName");
// console.log(lastName.nodeType);
// lastName.childNodes[0].nodeValue = "Last Name: Khan";
// var main = document.getElementById("main-content");
// console.log(main.firstChild);
// console.log(main.lastChild);
// var lastName = document.getElementById("lastName");
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);
// var mail = document.getElementById("email");
// console.log(mail.parentNode);
// console.log(mail.nodeType);
