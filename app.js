//              ******************* CHAPTER 38 TO 43 ********************


// QUESTION NO 1:

// Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function pow(a,b){
//     var c=Math.pow(a,b);
//     document.write("teh value of a raised to b is "+c);
// }
// var no1=+prompt("enter the base");
// var no2=+prompt("enter the power");
// pow(no1,no2);

// QUESTION NO: 2

// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// function leapyear(year){

//     if (year%4 == 0){
//         document.write(year+ " is a leap year");
//     }
//     else{
//         document.write(year+ " is not a leap year");
//     }
// }
// var a=+prompt("enter the year u want to check ");
// leapyear(a);

// QUESTION NO : 3

// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function areaoftriangle(a,b,c){
//     var area =herionsformula(a,b,c)*((herionsformula(a,b,c)-a)*(herionsformula(a,b,c)-b)*(herionsformula(a,b,c)-c));
//     document.write("the area of triangle is "+area);

// }
// function herionsformula(a,b,c){
//     var s=(a+b+c)/2;
//     return s;

// }
// var a=+prompt("enter the value");
// var b=+prompt("enter the value");
// var c=+prompt("enter the value");
// herionsformula(a,b,c);
// areaoftriangle(a,b,c);

// QUESTION NO : 4 Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// function main(){
//     document.write("the average of 3 subjects is "+average(a,b,c)+"<br>");
//     document.write("the percentage of 3 subjects is "+percentage(a,b,c)+"%"+"<br>");

// }
// function average(a,b,c){
//     var avg =(a+b+c)/3;
//     return avg;
// }
// function percentage(a,b,c){
//     var per=((a+b+c)*100)/300;
//     return per;
// }
// var a=+prompt("enter the 1 subject no");
// var b=+prompt("enter the 2 subject no");
// var c=+prompt("enter the 3 subject no");
// average(a,b,c);
// percentage(a,b,c);
// main();

// QUESTION NO: 5 You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// QUESTION NO: 6  Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.


// function delete_vowel(a){
//     var b=a.length;
//     var d="";
//     for(var i=0;i<b;i++){
//         if(a[i]=="a" || a[i]=="e" || a[i]=="i"|| a[i]=="o" || a[i]=="u"){
    
//         }
//         else{
//             d+=a[i];
//         }
//     }
//     return d;
// }
// var a="When JavaScript was created";
// var result=delete_vowel(a);
// document.write("after deleteing vowel the sentence is "+result);

// QUESTION NO: 7

// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.For example, in the sentence

// function findOccurances(str){
//     var words = str.split(" ");
//     var count=0;
//     for(var i=0;i<words.length;i++){
//         for(var j=0; j<words[i].length; j++){
//             var char = words[i].slice(j,j+1).toLowerCase();
//             var nextChar = words[i].slice(j+1,j+2).toLowerCase();
//             switch(char){
//                 case "a":
//                 case "e":
//                 case "i":
//                 case "o":
//                 case "u":
//                     switch(nextChar){
//                         case "a":
//                         case "e":
//                         case "i":
//                         case "o":
//                         case "u":
//                             count++;
//                     }
//             }
//         }
        
//     }
//     return count;
// }

// var str = "Pleases read this application and give me gratuity";
// var count = findOccurances(str);
// alert(count);


// QUESTION NO :8

// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// function meter(a){
//     var m=a*1000;
//     document.write("the distance in meter is "+m+"<br>");

// }
// function feet(a){
//     var f=a*3280.84;
//     document.write("the distance in meter is "+f+"<br>");

// }
// function inches(a){
//     var g=a*39370.1;
//     document.write("the distance in meter is "+g+"<br>");

// }
// function centimeter(a){
//     var k=a*100000;
//     document.write("the distance in meter is "+k+"<br>");

// }

// var distance=+prompt("enter the distance between the two distance in (km)");
// meter(distance);
// feet(distance);
// inches(distance);
// centimeter(distance);

// QUESTION NO: 9

// Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.


// var i=1;
// while(i<=10){
//     var b;
//     var c;
//     var a =+prompt("enter the no of hours user work in a week");
//     document.write("the customer "+i +" work hours in a week "+ a+"<br>");
//     if (a<=40){
//         document.write("no overtime pay"+"<br>");
//         break;
//     }
//     else{
//         b=12.00*(a-40);
//         document.write("the customer over time ruppess is "+b+"<br>");

//     }
//     i=i+1;
// }

// QUESTION NO: 10

// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// var amount=+prompt("enter the amout u want to withdraw");
// document.write("required notes for 100% is "+amount/100+"<br>");
// document.write("required notes for 50% is "+(amount%100)/50+"<br>");
// document.write("required notes for 10% is "+((amount%100)%50)/10+"<br>");
// document.write("amout still remaining is "+((amount%100)%50)%10+"<br>");


//              ******************* CHAPTER 43 TO 48 ********************

// QUESTION NO: 1

// Show an alert box on click on a link.aaa

// function greet(){
//     alert("welcome");
// }

// QUESTION NO: 2

// Display some Mobile images in browser. On click on an image Show the message in alert to user.

// function mobile(){
//     alert("thanks for buying the phone");
// }

// QUESTION NO:3
// Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

// function delete_the_enter_row(r){
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("table").deleteRow(i);


// }

// QUESTION NO: 4
// Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// function big(x){
//     x.style.width="300px"
//     x.style.height="300px"

// }
// function small(x){
//     x.style.width="400px"
//     x.style.height="400px"

// }

// QUESTION NO: 5

// Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// var count=0;
// function increment(){
//     document.getElementById("click").innerHTML=count+=1;

// }
// function decrement(){
//     document.getElementById("click").innerHTML=this.count-=1;

// }
