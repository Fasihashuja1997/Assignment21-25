// JAVASCRIPT CHAPTERS(21-25)
//Question#1:
// var firstname = prompt("Enter your first name");
// var secondname = prompt("Enter your second name");
// var fullname = (firstname + " " + secondname)
// alert("Hello" + " " + fullname + "!");
//  Question#2
// var mob = prompt("Enter your favourite Mobile phone model:");
// var index = mobile.length;
// document.write("My favourite phone is :" + mob + "<br>");
// document.write("Length of string :" + index + "<br>");
//  Question#3
// var str1 = ("Pakistani");
// var index = (str.indexOf ("n"));
// document.write("String:" + str1 + "<br>");
// document.write("Index of 'n' :" + index + "<br>") ;
//  Question#4
// var str2 = ("Hello WorLd");
// var lastindex = (str.indexOf ("L"));
// document.write("String:" + str2 + "<br>");
// document.write("Index of 'l' :" + lastindex + "<br>") ;
//  Question#5
// var str = ("Pakistani");
// var char = str[3];
// document.write("String:" + str + "<br>");
// document.write("Character at index 3 :" + char + "<br>") ;
//  Question#6
// var st1 = prompt("Enter your first name");
// var st2 = prompt("Enter your second name");
// var st3 = st1.concat(st2);
// alert("Hello" + " " + st3 + "!");
//  Question#7
// var city1 = ("Hyderabad");
// var city2 = city1.replace("Hyder","Islam");
// document.write("City:" + city1 + "<br>");
// document.write("After replacement:" + city2 + "<br>");
//  Question#8
// var mess = ("Ali and Sami are best friends. They play cricket and football together");
// var replace = mess.replace("and","&");
// document.write(replace);
//  Question#9
// var str = "472";
// var number = parseInt(str);
// document.write("Value:" + " " + str + "<br>");
// document.write("Type : String" + "<br>");
// document.write("Value:" + " " + number + "<br>");
// document.write("Type : Number" + "<br>");
//  Question#10
// var input = prompt("Write a word:");
// var uppercase = input.toUpperCase();
// document.write("User input:" + input + "<br>");
// document.write("Upper case:" + uppercase + "<br>");
//  Question#11
//  var userinput = prompt("Write a word:");
//  var firstchar = userinput.slice(0,1);
//  firstchar = firstchar.toUpperCase();
//  var otherchar = userinput.slice(1);
//  otherchar = otherchar.toLowerCase();
//  var userinput = firstchar+otherchar;
//  document.write(userinput);
//  Question#12
// var num1 = 35.36;
// var str = (num1.toString());
// document.write("Number:" + num1 + "<br>");
// document.write("Result:" + str + "<br>");
//  Question#13
// var name = prompt("Enter your Username:");
// var a = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ;
// if (name.match(a)){
// alert("Invalid username");
// }
//  Question#14
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to ABC bakery! what do you want to order sir/ma'am" , "Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryitems = array.indexOf(bakery);
// if (array.indexOf(bakery) != -1){
//     document.write(bakery + " " + "is available at index" + " " + bakeryitems + "in our bakery");
// }
// else {
//     document.write(bakery + "is not available in our bakery");
// }
//  Question#16
//  var university = ("University of Karachi"); 
// var arr = university.split("");
// for (var i = 0 ; i < arr.length; i++){
// document.write(arr[i] + "<br>")
// }
//  Question#17
// var country = prompt("Enter your Country name:");
// var countrylenght = country.length;
// document.write("the last character is" + country.charAt(countrylenght-1))
//  Question#18
// var str1 = ("The quick brown fox jumps over the lazy dog");
// var intolower = str1.toLowerCase();
// var count = intolower.match(/the/g).length;
// document.write("There are" ) + count + " occurance(s) of 'the' "