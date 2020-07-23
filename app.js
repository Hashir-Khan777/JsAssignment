// chapter 1
// task 1
// alert("Error! Please enter a valid password")
// task 2
// alert("Welcome to JS land...\nHappy Coding!")
// task 3
// alert("Welcome to JS land")
// task 4
// alert("Happy Coding!\nPrevent this Page from creating additional dialogs")
// task 5
// alert("Hello... I can run JS through my web browser's console")

// chapter 2
// task 1
// var username;
// task 2
// var myName = "Hashir Khan"
// task 3
// var message = "Hello World!"
// alert(message)
// task 4
// var p1 = prompt("Enter Name", "Enter Your Name")
// var p2 = prompt("Enter age", "Enter Your age")
// var p3 = prompt("Enter certification", "Enter Your certification")
// alert ("Name: " + p1 + "\n" + "Age: " + p2 + "\n" + "Certification: " + p3)
// task 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// task 6
// const email = "hashirk966@gmail.com"
// alert("My email is" + " " + email)
// task 7
// let book =  "A smarter way to learn JavaScript"
// alert("I am trying to learn from the book" + " " + book)
// task 8
// document.write ("Yah! I can write HTML through Javascript")
// task 9
// var style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(style)
// document.write (style)

// cahpter 3
// task 1
// var age = 16
// alert("I am" + " " + age + " " + "years old")
// task 3
// var birthYear = 2003;
// document.write("My birth year is " + birthYear);
// task 4
// var name = prompt("Enter Name", "Enter Your Yame Here");
// var product = prompt("Enter Product", "Enter Product Name");
// var quantity = prompt("Enter Quantity", "Enter Product Quantity");
// var store = "ZARA"
// document.write("Name: " + name + "<br>" + "Product: " + product + "<br>" + "Quantity: " + quantity + "<br>" +
//     "Store Name: " + store + " clothing store");

// chapter 4
// task 1
// var a = prompt("enter name", "Ennter Your Name");
// var b = prompt("enter age", "Ennter Your Age");
// var c = prompt("enter qualification", "Ennter Your Qualification");
// alert("Hy! " + a + " you are " + b + " years old and your qualification is " + c + ".");
// task 2
// document.write("<h1>5 LEGAL VARIABLE NAMES</h1> 1. useralert <br> 2. myvar <br> 3. car <br> 4. userName <br> 5. MyPassword")
// document.write("<h1>5 ILLEGAL VARIABLE NAMES</h1> 1. first variable <br> 2. 2book <br> 3. 44 <br> 4. var <br> 5. 33 user")
// task 3
// document.write("<h1>Rules for naming JS variables</h1> variable name can contain only letters, numbers, dollar signs, and underscores. For example $my_1stVariable. <br> Variable must begin with a letter $ or _. For example $my_1stVariable. <br> Variable names are case sensetive. <br> Variable names should not be JS keywords.")

// chapter 5
// task 1
// var sum = 5 + 7;
// document.write('the sum of 5 + 7 is ' + sum + '<br>')
// task 2
// var sub = 5 - 7;
// document.write('the sum of 5 - 7 is ' + sub + '<br>')
// var mul = 5 * 7;
// document.write('the sum of 5 * 7 is ' + mul + '<br>')
// var div = 5 / 7;
// document.write('the sum of 5 / 7 is ' + div + '<br>')
// task 3
// var num = 7;
// document.write("Initial value: " + num + "<br>");
// var num = ++num;
// document.write("Value after increment is: " + num + "<br>");
// var num = num + 7;
// document.write("value after addition is: " + num + "<br>");
// var num = --num;
// document.write("value after decrement is: " + num + "<br>");
// var num = num%3;
// document.write("The remainder is: " + num + "<br>");
// task 4
// var ticket = 600;
// document.write("The price of first ticket is: " + ticket + "<br>");
// var ticket = ticket*5;
// document.write("Total price 0f 5 tickets is: " + ticket);
// task 5
// var b = prompt("Enter number", "Enter table number");
// var c = prompt("Enter length", "Enter length of table");
// document.write("TABLE OF" + " " + b + "<br>" + "<br>");
// for (var a = 1; a <= c; a++) {
//     document.write(b + " * " + a + " = " + b * a + "<br>")
// };
// task 6
// var cel = 33;
// document.write(cel + "<sup>o</sup>C" + " is ");
// var cel = (cel * 9 / 5) + 32;
// document.write(cel + "<sup>o</sup>F" + "<br>");
// var fer = 33;
// document.write(fer + "<sup>o</sup>F" + " is ");
// var fer = (fer - 32) * 5 / 9;
// document.write(fer + "<sup>o</sup>C" + "<br>");
// task 7
// var p1 = +prompt("Enter price", "Enter price of item one");
// var p2 = +prompt("Enter price", "Enter price of item two");
// var q1 = prompt("Enter quantity", "Enter quantity of item one");
// var q2 = prompt("Enter quantity", "Enter quantity of item two");
// var ship = 200;
// var total = p1 + p2 + ship;
// document.write("<h1>SHOPPING CART</h1> Price of item 1 is: " + p1 + "<br>" +
//     "orderd quantity of item 1 is: " + q1 + "<br>" + "Price of item 2 is: " + p2 + "<br>" +
//     "orderd quantity of item 2 is: " + q2 + "<br>" + "Shipping charges: " + ship + "<br>" +
//     "Total coast of your order is: " + total);
// task 8
// var name = prompt('Enter name', "Enter your name here");
// var total = +prompt("Enter total marks", "Enter your total marks");
// var obtained = +prompt("Enter obtained marks", "Enter your obtained marks");
// var percentage = total / obtained * 100 + "%";
// document.write("<h1>MARKSHEET</h1> Your name is: " + name + "<br>" + "Total marks: " + total +
//     "<br>" + "Obtained marks: " + obtained + "<br>" + "Your Percentage: " + percentage);
// task 9
// var usd = 10;
// var saudi = 25;
// var usdpak = 104.80 * usd;
// var saudipak = 28 * saudi;
// var pak = usdpak + saudipak;
// document.write("Toatal currency in PKR is: " + pak);
// task 10
// var num = 6 + 5 * 10 % 2;
// document.write(num);
// task 11
// var dob = new Date(prompt("Enter your date of birth", "Jan 1, 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
// document.write("current year: " + today.getFullYear() + "<br>" + "Birth Date: "
//     + dob + "<br>" + "Your age is: " + accuage);
// task 12
// var radius = prompt("Enter radius", "Enter radius of a circle");
// var circum = 2 * 3.142 * radius;
// var area = 2 * 3.142 * radius ** 2;
// document.write("radius: " + radius + "<br>" + "Circumfrence: " + circum + "<br>" +"area: " + area);

// chapter 6-9
// task 1
// var a = prompt("Enter value", "Enter your value");
// document.write("Your value is: " + a + "<br>");
// var a = ++a;
// document.write("value of ++a: " + a + "<br>");
// var a = a++;
// document.write("value of a++: " + a + "<br>");
// var a = --a;
// document.write("value of --a: " + a + "<br>");
// var a = a--;
// document.write("value of a--: " + a + "<br>");
// task 2
// var a = 2;
// var b = 1;
// var result = (--a - --b) + (++b + b--);
// document.write("--a: " + (--a) + "<br>");
// document.write("--a - --b: " + (--a - --b) + "<br>");
// document.write("--a - --b + ++b: " + (--a - --b + ++b) + "<br>");
// document.write("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>");
// document.write("Result is: " + result);
// task 3
// var name = prompt("Enter Name", "Enter your name here");
// alert("Good morning! " + name);
// task 4
// function multiplication(b) {
//     for (var a = 1; a <= 10; a++) {
//         document.write(b + " * " + a + " = " + b * a + "<br>")
//     };
//     return multiplication
// };
// multiplication(+prompt("Enter Number", "Enter Your Number"));
// task 5
// var sub1 = prompt("Enter Subject name", "Enter Subject one");
// var sub2 = prompt("Enter Subject name", "Enter Subject two");
// var sub3 = prompt("Enter Subject name", "Enter Subject three");
// var obt1 = +prompt("Enter obtained marks", "Enter obtained marks for Subject one");
// var obt2 = +prompt("Enter obtained marks", "Enter obtained marks for Subject two");
// var obt3 = +prompt("Enter obtained marks", "Enter obtained marks for Subject three");
// var totalMarks = 100;
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>");
// document.write("SUBJECT");
// document.write("</th>");
// document.write("<th>");
// document.write("TOTAL MARKS");
// document.write("</th>");
// document.write("<th>");
// document.write("OBTAINED MARKS");
// document.write("</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub1);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt1);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub2);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt2);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub3);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt3);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(" ");
// document.write("</td>");
// document.write("<th>");
// document.write(totalMarks + totalMarks + totalMarks);
// document.write("</th>");
// document.write("<th>");
// document.write(obt1 + obt2 + obt3);
// document.write("</th>");
// document.write("</tr>");
// document.write("</table>");
// document.write("<br><br>");
// document.write("YOUR PERCENTAGE IS: " + ((obt1 + obt2 + obt3) / (totalMarks
//     + totalMarks + totalMarks) * 100) + "%");

// chapter 9-11
// task 1
// var city = prompt("Enter city", "Enter your city name");
// var city = city.toUpperCase();
// if (city === "KARACHI") {
//     alert("Welcome to city of lights.");
// } else {
//     alert("Welcome to " + city + " city.");
// }
// task 2
// var gender = prompt("Enter Gender", "Enter Your Gender");
// gender = gender.toLowerCase();
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else {
//     alert("Good Morning Mam");
// }
// task 3
// var traffic = prompt("Enter Color of Road Traffic Signal", "Enter Color");
// traffic = traffic.toLowerCase();
// if (traffic === "red") {
//     alert("MUST STOP");
// } else if (traffic === "yellow") {
//     alert("READY TO MOVE");
// } else if (traffic === "green") {
//     alert("MOVE NOW");
// } else {
//     alert("Enter valid color");
// }
// task 4
// var fuel = +prompt("Enter Remaining Fuel In Your Car", "Enter Fuel In Liters");
// if (fuel === 0.25) {
//     alert("Refuel Your Car");
// } else {
//     alert("Enjoy the ride");
// }
// task 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// alert is displayed
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// alert is not displayed
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// alert is displayed for condition 2 and 4
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// alert is displayed
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// alertn is displayed for true
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// alert is displayed
// task 6
// var obtmarks = +prompt("Enter Obtained Marks In Three Subjects", "Enter Marks");
// var totmarks = +prompt("Enter Total Marks", "Enter Marks");
// var per = obtmarks / totmarks * 100;
// document.write("Total Marks : " + totmarks + "<br>");
// document.write("Obtained Marks : " + obtmarks + "<br>");
// document.write("Percentage : " + per + "%" + "<br>");
// if (per >= 80) {
//     document.write("Grade : A-one" + "<br>" + "Remarks : Excellent" + "<br>");
// } else if (per >= 70) {
//     document.write("Grade : A" + "<br>" + "Remarks : Good" + "<br>");
// } else if (per >= 60) {
//     document.write("Grade : B" + "<br>" + "Remarks : You need to improve" + "<br>");
// } else if (per < 60) {
//     document.write("Grade : FAIL" + "<br>" + "Remarks : Sorry" + "<br>");
// } else {
//     alert("Enter Valid Marks");
// }
// task 7
// var seceret = 7;
// var secpro = +prompt("Guess The Seceret Number", "Guess Number");
// if (secpro === seceret) {
//     alert("Bingo! Correct Answer");
// } else if (secpro === seceret + 1) {
//     alert("Close enough");
// } else if (secpro === seceret - 1) {
//     alert("Close enough");
// } else {
//     alert("You Lose");
// }
// task 8
// var num = +prompt("Enter any Number", "Enter number");
// if (num % 3 === 0) {
//     alert(num + " is the multiple of 3");
// } else {
//     alert(num + " is not the multiple of 3");
// }
// task 9
// var evenum = +prompt("Enter Any Number", "Enter Number");
// if (evenum % 2 === 0) {
//     alert(evenum + " is even");
// } else {
//     alert(evenum + " is odd");
// }
// task 10
// var temp = +prompt("Enter Temprature", "Enter temprature");
// if (temp >= 40) {
//     alert("It is too hot outside.");
// } else if (temp >= 30) {
//     alert("The Weather today is Normal.");
// } else if (temp >= 20) {
//     alert("Today’s Weather is cool.");
// } else if (temp >= 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("Enter write temprature");
// }
// task 11
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// if (opr === "+") {
//     alert(num1 + num2);
// } else if (opr === "-") {
//     alert(num1 - num2);
// } else if (opr === "*") {
//     alert(num1 * num2);
// } else if (opr === "/") {
//     alert(num1 / num2);
// } else if (opr === "%") {
//     alert(num1 / num2 * 100 + "%");
// } else {
//     alert("enter write operator");
// }

// chapter 12-13
// task 1
// task 2
// var int1 = +prompt("Enter First Intiger", "Enter Intiger");
// var int2 = +prompt("Enter Second Intiger", "Enter Intiger");
// if (int1 > int2) {
//     alert(int1 + " is larger");
// } else if (int2 > int1) {
//     alert(int2 + " is larger");
// } else if (int1 == int1) {
//     alert("Both are equal");
// } else {
//     alert("Enter Right Intiger");
// }
// task 3
// var entnum = +prompt("Enter Any Number", "Enter Number");
// if (entnum < 0) {
//     alert(entnum + " is negative");
// } else if (entnum > 0) {
//     alert(entnum + " is posetive");
// } else if (entnum == 0) {
//     alert(entnum + " is zero");
// } else {
//     alert("Enter a valid number");
// }
// task 4
// var vow = prompt("Enter Any Alphabet", "Enter Alphabet");
// if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u") {
//     alert(vow + " is vowel");
// } else {
//     alert(vow + " is not a vowel");
// }
// task 5
// var correct = "ghousshah";
// var pass = prompt("Enter Password", "Enter Password Here");
// if (correct === pass) {
//     alert("Correct! The password you entered matches the original password\n" + "Original Password is " + correct);
// } else {
//     alert("Enter Correct Password");
// }
// task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good day");
// } else {
//     alert(greeting = "Good evening");
// }
// task 7
// var time = prompt("Enter Time in 24 Hour formate", "Enter Time");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time <= 2400) {
//     alert("Good Night");
// } else {
//     alert("Enter Valid Time");
// }

// chapter 14-16
// task 1
// var studata = [];
// studata[0] = Hashir;
// studata[1] = Tawab;
// studata[2] = Wahab;
// task 2
// var studata = [];
// studata[0] = Hashir;
// studata[1] = Tawab;
// studata[2] = Wahab;
// task 3
// var strarr = ["Sir Muhammad Ali", "Sir Ghous", "Sir Basit"];
// task 4
// var numarr = ["1", "2", "3"];
// task 5
// var boolarr = ["True", "False"];
// task 6
// var mixarr = ["True", "1", "Sir Muhammad Ali"];
// task 7
// var eduqual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MS", "M. Phil", "PhD"];
// document.write("<h2>QUALIFICATIONS:</h2>")
// for (var i = 0; i < eduqual.length; i++) {
//     document.write(i + " ) " + eduqual[i] + "<br>");
// }
// task 8
// var totmark = 500;
// var name1 = prompt("Enter First Name", "Enter Name");
// var name2 = prompt("Enter Second Name", "Enter Name");
// var name3 = prompt("Enter Third Name", "Enter Name");
// var namearr = [name1, name2, name3];
// var score1 = +prompt("Enter Score Of First Student", "Enter Score");
// var score2 = +prompt("Enter Score Of Second Student", "Enter Score");
// var score3 = +prompt("Enter Score Of Third Student", "Enter Score");
// var scorearr = [score1, score2, score3];
// var per1 = score1 / 500 * 100;
// var per2 = score2 / 500 * 100;
// var per3 = score3 / 500 * 100;
// var perarr = [per1, per2, per3];
// for (var j = 0; j < namearr.length; j++) {
//     document.write("Score of " + namearr[j] + " is " + scorearr[j] + "." + " Percentage : " + perarr[j]
//         + "%" + "<br>");
// }
// task 9
// var colorarr = ["Blue", "Red", "Green", "Yellow", "Golden", "Purple"];
// var concolor = +confirm("Do You Want To Add Color");
// if (concolor === 1) {
//     colorprompt();
// } else {
//     colorarray();
// }
// function colorarray() {
//     for (b = 0; b < colorarr.length; b++) {
//         document.write(colorarr[b] + "<br>");
//     }
// }
// function colorprompt() {
//     var colorname = prompt("Enter Color Nmae You Want To Add", "Enter Color");
//     var colorindex = +prompt("Enter Index Number From Where You Want To Add Color", "Enter Index Number");
//     colorarr.splice(colorindex, 0, colorname);
//     colorarray();
// }
// task 10
// var stu1 = prompt("Enter First Student Score", "Enter Score");
// var stu2 = prompt("Enter Second Student Score", "Enter Score");
// var stu3 = prompt("Enter Third Student Score", "Enter Score");
// var stu4 = prompt("Enter Fourth Student Score", "Enter Score");
// var stuarr = [stu1, stu2, stu3, stu4];
// document.write("Scores Of Students: " + stuarr + "<br>");
// var stuarr = stuarr.sort(function (a, b) { return a - b });
// document.write("Ordered Scores Of Students: " + stuarr)
// task 11
// task 12
// var strarr = ["This", "is", "my", "cat"];
// var strarr = strarr.join(" ")
// document.write(strarr);
// task 13
// var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write(comp + "<br><br>");
// for (var i = 0; i < comp.length; i++) {
//     document.write(comp[i] + "<br>");
// }
// task 14
// var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write(comp + "<br><br>");
// var comp = comp.reverse();
// for (var i = 0; i < comp.length; i++) {
//     document.write(comp[i] + "<br>");
// }
// task 15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// document.write("<option>Select Your Company</option>");
// for (var z = 0; z < phone.length; z++) {
//     document.write("<option>" + phone[z] + "</option>");
// }
// document.write("</select>");

// chapter 17-20
// task 1
// var multi = [
//     ['apple', 'orange', 'pear'],
//     ['carrots', 'beans', 'peas'],
//     ['cookies', 'cake', 'muffins', 'pie'],
// ];
// task 2
// var multinum = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// for (i = 0; i < multinum.length; i++) {
//     document.write(multinum[i] + "<br>");
// }
// task 3
// for (var num = 1; num <= 10; num++) {
//     document.write(num + "<br>");
// }
// task 4
// var b = prompt("Enter number")
// var c = prompt("enter length of table")
// document.write("TABLE OF" + " " + b + "<br>" + "<br>")
// for (var a = 1; a <= c; a++) {
//     document.write(b + " * " + a + " = " + b * a + "<br>")
// }
// task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var z = 0; z < fruits.length; z++) {
//     document.write(fruits[z] + "<br>");
// }
// for (var z = 0; z < fruits.length; z++) {
//     document.write("Element at " + z + " index is: " + fruits[z] + "<br>");
// }
// task 6
// task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome To ABC Bakery, What Do You Want To Order", "Your Order Here");
// search = search.toLowerCase();
// if (A.indexOf(search) !== -1) {
//     alert(search + " is available");
// } else {
//     alert(search + " is not available");
// }
// task 8
// var arr = [24, 53, 78, 91, 12];
// document.write(arr + "<br>");
// document.write("The Largest Number Is: " + Math.max(...arr))
// task 9
// var arr = [24, 53, 78, 91, 12];
// document.write(arr + "<br>");
// document.write("The Smallest Number Is: " + Math.min(...arr));
// task 10

// chapter 21-25
// task 1
// var firname = prompt("Enter First Name", "Enter Name");
// var lasname = prompt("Enter Last Name", "Enter Name");
// var fullname = firname + " " + lasname;
// alert("Good Morning! " + fullname + " wish you have a good day.");
// task 2
// var favmobile = prompt("Enter Your Favourite Mobile Model", "Enter Mobile Model");
// var mobilelen = favmobile.length;
// document.write("Your Favourite Mobile Model is " + favmobile + "<br>" + "The Length Of String is " + mobilelen);
// task 3
// var pak = "Pakistani";
// var pakindex = pak.indexOf("n");
// document.write("String " + pak + "<br>" + "Index of 'n' is " + pakindex);
// task 4
// var hello = "Hello,World";
// var helloindex = hello.lastIndexOf('l');
// document.write("string : " + hello + "<br>" + "Last index of l is : " + helloindex);
// task 5
// var str = "Pakistan";
// var strindex = str.charAt(3);
// document.write(
//   "String : " + str + "<br>" + "Character at index 3 : " + strindex
// );
// task 6
// var firname = prompt("Enter First Name", "Enter Name");
// var lasname = prompt("Enter Last Name", "Enter Name");
// var concat = firname.concat(" " + lasname);
// alert("Good Morning! Mr. " + concat);
// task 7
// var city = "Hyderabad";
// var replace = city.replace("Hyder", "Islam");
// document.write("City : " + city + "<br>" + "After replacement : " + replace);
// task 8
// var message = "Ali and Sami are best friends. They play cricket and Football together.";
// var replace = message.replace(/and/g, "&");
// document.write(replace);
// task 9
// var str = "472";
// var typestr = typeof str;
// var con = parseInt(str);
// var typecon = typeof con;
// document.write(
//   "Value : " +
//     str +
//     "<br>" +
//     "type : " +
//     typestr +
//     "<br>" +
//     "Value : " +
//     con +
//     "<br>" +
//     "type : " +
//     typecon
// );
// // task 10
// var input = prompt("Enter any string", "Enter String");
// var upper = input.toUpperCase();
// document.write("User Input : " + input + "<br>" + "UpperCase : " + upper);
// task 11
// var capital = prompt("Enter Any String", "Enter String");
// var capitalstr =
//   capital.charAt(0).toUpperCase() + capital.slice(1).toLowerCase();
// document.write(
//   "User Input : " + capital + "<br>" + "Capitalize : " + capitalstr
// );
// task 12
// var num = 35.36;
// var str = num.toString();
// document.write(typeof str + str);
// task 13
// task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt(
//   "Welcome To ABC Bakery, What Do You Want To Order",
//   "Your Order Here"
// );
// search = search.toLowerCase();
// if (A.indexOf(search) !== -1) {
//   alert(search + " is available");
// } else {
//   alert(search + " is not available");
// }
// task 15
// var password = prompt("Enter Your Password", "Enter Password");
// if (
//   password.charAt(0) == 0 ||
//   password.charAt(0) == 1 ||
//   password.charAt(0) == 2 ||
//   password.charAt(0) == 3 ||
//   password.charAt(0) == 4 ||
//   password.charAt(0) == 5 ||
//   password.charAt(0) == 6 ||
//   password.charAt(0) == 7 ||
//   password.charAt(0) == 8 ||
//   password.charAt(0) == 9
// ) {
//   alert("password not begin with a number");
// } else {
//   alert("Correct Password");
// }
// task 16
// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {
//   document.write(university[i] + "<br>");
// }
// task 17
// var input = prompt("Enter Any String", "Enter String");
// var lasin = input.charAt(input.length - 1);
// document.write("User Input : " + input + "<br>" + "Last Character : " + lasin);
// task 18
// var str = "The quick brown fox jumps over the lazy dog";
// var ser = str.toLowerCase().match(/the/g).length;
// document.write(
//   "text = " + str + "<br>" + "There are " + ser + " occuraces of word 'the'"
// );

// chapter 26-30
// task 1
// var innum = +prompt("Enter Positive Intiger", "Enter Intiger");
// var round = Math.round(innum);
// var floor = Math.floor(innum);
// var ceil = Math.ceil(innum);
// document.write(
//   "Number : " +
//     innum +
//     "<br>" +
//     "Round off value : " +
//     round +
//     "<br>" +
//     "Floor value : " +
//     floor +
//     "<br>" +
//     "Ceil value : " +
//     ceil +
//     "<br>"
// );
// task 2
// var innum = +prompt("Enter Negative Intiger", "Enter Intiger");
// var round = Math.round(innum);
// var floor = Math.floor(innum);
// var ceil = Math.ceil(innum);
// document.write(
//   "Number : " +
//     innum +
//     "<br>" +
//     "Round off value : " +
//     round +
//     "<br>" +
//     "Floor value : " +
//     floor +
//     "<br>" +
//     "Ceil value : " +
//     ceil +
//     "<br>"
// );
// task 3
// var num = +prompt("Enter Any Intiger", "Enter Intiger");
// var abs = Math.abs(num);
// document.write("The absolute value of " + num + " is" + abs);
// task 4
// var con = +confirm("Do You Want To Run The Dice");
// if (con !== 0) {
//   var random = Math.floor(Math.random() * 7);
//   alert("The Random Dice Value Is : " + random);
// } else {
//   alert("OK");
// }
// task 5
// var heads = prompt("Enter Your Name If you Want To Take Heads", "Enter name");
// var tails = prompt("Enter Your Name If you Want To Take Tails", "Enter name");
// var random = Math.floor(Math.random() * 2);
// if (random == 0) {
//   alert(heads + " Congratulation! its heads you win");
// } else {
//   alert(tails + " Congratulation! its tails you win");
// }
// task 6
// var random = Math.floor(Math.random() * 101);
// document.write("The randome number between 1 to 100 is : " + random);
// task 7
// task 8
// var secert = Math.floor(Math.random() * 11);
// var guess = prompt("Enter Your Guess 1-10", "Enter Guess");
// if (guess == secert) {
//   alert("Congrats You Win");
// } else {
//   alert("Try Again");
// }

// chapter 31 - 34
// task 1
// var rightNow = new Date();
// document.write(rightNow);
// task 2
// var month;
// switch (new Date().getMonth()) {
//   case 0:
//     month = "January";
//     break;
//   case 1:
//     month = "Febuary";
//     break;
//   case 2:
//     month = "March";
//     break;
//   case 3:
//     month = "Aril";
//     break;
//   case 4:
//     month = "May";
//     break;
//   case 5:
//     month = "June";
//     break;
//   case 6:
//     month = "July";
//     break;
//   case 7:
//     month = "August";
//     break;
//   case 8:
//     month = "September";
//     break;
//   case 9:
//     month = "October";
//     break;
//   case 10:
//     month = "November";
//     break;
//   case 11:
//     month = "December";
// }
// document.write("Current Month : " + month);
// task 3
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "SUN";
//     break;
//   case 1:
//     day = "MON";
//     break;
//   case 2:
//     day = "TUE";
//     break;
//   case 3:
//     day = "WED";
//     break;
//   case 4:
//     day = "THU";
//     break;
//   case 5:
//     day = "FRI";
//     break;
//   case 6:
//     day = "SAT";
//     break;
// }
// document.write("Today is " + day);
// task 4
// var sat = new Date().getDay();
// if (sat == 0 || sat == 6) {
//   alert("It's Fun Day");
// } else {
//   alert("It's Not A Fun Day");
// }
// task 5
// var date = prompt("Enter Date Of Month", "Enter Date");
// if (date <= 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }
// task 6
// document.write(
//   "Current Date : " +
//     new Date() +
//     "<br>" +
//     "Elapsed miliseconds since January 1, 1970 : " +
//     new Date().getTime() +
//     "<br>" +
//     "Elapsed minutes since January 1, 1970 : " +
//     new Date().getTime() / 60000
// );
// task 7
// var time = new Date().getHours();
// console.log(time);
// if (time > 12 && time < 0) {
//   alert("it's A.M");
// } else {
//   alert("It's P.M");
// }
// task 8
// var d = new Date(2020, 11, 31);
// document.write("Later Date : " + d);
// task 9
// var d = new Date(2015, 7, 18).getTime();
// var e = new Date().getTime();
// var f = e - d;
// var g = Math.round(f / (1000 * 60 * 60 * 24));
// document.write(g + " days have passed since 1<sup>st</sup> Ramadan, 2015");
// task 10
// var d = new Date();
// var e = d.getTime();
// var f = new Date(2015, 0, 1).getTime();
// var g = e - f;
// var h = g / 1000;
// document.write(
//   "On refrence Date " +
//     d +
//     ", " +
//     h +
//     "seconds had passed since beginning of 2015"
// );
// task 11
// task 12
// task 13
// var age = +prompt("Enter Your Age", "Enter Age");
// var d = new Date().getFullYear();
// var e = d - age;
// document.write("Your age is : " + age + "<br>" + "Your birh Year is : " + e);

// chapter 35-38
// task 1
// var d = new Date();
// document.write(d);
// task 2
// var firname = prompt("Enter Your First Name", "Enter Name");
// var lasname = prompt("Enter Your Last Name", "Enter Name");
// function add() {
//   var i = firname + " " + lasname;
//   alert("Good Morning " + i);
// }
// add();
// task 3
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// function foo() {
//   var foo = num1 + num2;
//   alert(foo);
// }
// foo();
// task 4
// var num1 = +prompt("Enter First Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// if (opr === "+") {
//   alert(num1 + num2);
// } else if (opr === "-") {
//   alert(num1 - num2);
// } else if (opr === "*") {
//   alert(num1 * num2);
// } else if (opr === "/") {
//   alert(num1 / num2);
// } else if (opr === "%") {
//   alert((num2 / num1) * 100 + "%");
// } else {
//   alert("Wrong Operator");
// }
// task 5
// var arg = +prompt("Enter Any Number", "Enter Number");
// var squ = arg ** 2;
// alert(squ);
// task 6
// var fact = +prompt("Enter Any Number", "Enter Number");
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// alert(factorial(fact));
// task 7
// task 8
// task 9
// var width = +prompt("Enter Width");
// var height = +prompt("Enter height");
// var A = width * height;
// alert(A);
// task 10
// var word = prompt("Enter Any Word", "Enter Word");
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//   check += word[i];
// }
// if (check === word) {
//   alert(word + " is palindrome word");
// } else {
//   alert(word + " is not a palindrome word");
// }
// task 11
// task 12

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
