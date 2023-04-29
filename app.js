// --------------------------PRACTICE OF CHAPTER 21-42-----------------------------------


// --------------------------PRACTICE OF CHAPTER 21-25-----------------------------------
// --------------------------CHAPTER 21-25 QUESTION 01-----------------------------------
// var firstName = prompt("WHAT IS YOUR FIRST NAME?")
// var lastName = prompt("WHAT IS YOUR LAST NAME?")
// var fullName = firstName+ " "+ lastName
// alert("WELCOME " + fullName)

// --------------------------CHAPTER 21-25 QUESTION 02-----------------------------------
// var favMobile = prompt("ENTER YOUR FAVOURITE MOBILE MODEL?")
// var mobLength= favMobile.length
// alert("LENGTH OF STRING IS " + mobLength) 

// --------------------------CHAPTER 21-25 QUESTION 03-----------------------------------
// var country = "PAKISTANI"
// var character = country.indexOf("N")
// alert(character)

// --------------------------CHAPTER 21-25 QUESTION 04-----------------------------------
// var greet = "HELLO WORLD"
// var character = greet.lastIndexOf("L")
// alert(character)

// --------------------------CHAPTER 21-25 QUESTION 05-----------------------------------

// var country = "PAKISTANI"
// var character = country.charAt(3)
// alert("CHARACTER AT 3rd INDEX IS " + character)

// --------------------------CHAPTER 21-25 QUESTION 06-----------------------------------
// var firstName = prompt("WHAT IS YOUR FIRST NAME?")
// var lastName = prompt("WHAT IS YOUR LAST NAME?")
// var fullName = firstName.concat(" " ,lastName)
// alert("WELCOME "+fullName)

// --------------------------CHAPTER 21-25 QUESTION 07-----------------------------------

// var city = "HYDERABAD"
// console.log(city);
// var change = city.replace("HYDER","ISLAM")
// console.log(change);
// --------------------------CHAPTER 21-25 QUESTION 08-----------------------------------

// var message = "Ali and Sami are best friends. They play cricket and football together."
// console.log(message)
// var change = message.replace(/and/ig, "&")
// console.log(change)

// --------------------------CHAPTER 21-25 QUESTION 09-----------------------------------

// var value = "472"
// console.log(typeof(value))
// value =parseInt(value)
// console.log(typeof(value))

// --------------------------CHAPTER 21-25 QUESTION 10-----------------------------------

// var input = prompt("ENETR ANY INPUT")
// alert(input.toUpperCase())

// --------------------------CHAPTER 21-25 QUESTION 11-----------------------------------

// var input = prompt("ENETR ANY INPUT")
// var first = input.slice(0,1).toUpperCase()
// console.log(first)
// var others = input.slice(1).toLowerCase()
// var full = first +others
// alert(full)

// --------------------------CHAPTER 21-25 QUESTION 12-----------------------------------

// var num = 35.36
//  num= num.toString()
//  console.log(typeof(num))
//  num =num.replace(".", "")
//  console.log(num)

// --------------------------CHAPTER 21-25 QUESTION 13-----------------------------------
// var ask = prompt("ENTER YOUR USERNAME")
// var ok =ask.charCodeAt()
// console.log(ok)
// if(ok <=122 && ok >=33 ){
//     alert(" PLEASE ENTER A VALID USERNAME")
// }

// --------------------------CHAPTER 21-25 QUESTION 14-----------------------------------
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// var ask = prompt("WHAT WOULD YOU LIKE TO ORDER").toLowerCase()
// var index =bakery.indexOf(ask)
// if (index !== -1){
//     alert(ask +" is availabale at our bakery at index "+ index)
// }
// else if (index == -1){
//     alert("sorry "+ask+ " is not avaialable at our bakery")
// }


// --------------------------CHAPTER 21-25 QUESTION 15-----------------------------------
// var pass = prompt("ENTER YOUR PASSWORD")
// var code = pass.charCodeAt()
// a = pass.slice(0,1)
// if (a >=48 || a <=57 ){
//     alert("invalid password")
// }
// else if (code >=65 || code <= 122){
//     alert("ok")
// }
// else{
//     alert("Invalid password")
// }


// --------------------------CHAPTER 21-25 QUESTION 16-----------------------------------
// var string = "UNIVERSITY OF KARACHI"
// var arr = string.split("")
// console.log(arr)

// --------------------------CHAPTER 21-25 QUESTION 17-----------------------------------

// var input = prompt("ENTER INPUT")
// var lastChar = input.slice(input.length-1)
// alert(lastChar)
// --------------------------CHAPTER 21-25 QUESTION 18-----------------------------------

// var sentence = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// var count = sentence.match(/THE/g).length
// console.log(count)

// --------------------------PRACTICE OF CHAPTER 26-30--------------------------------------
// --------------------------CHAPTER 26-30 QUESTION 01--------------------------------------

// var num = prompt("ENTER A NUMBER")
// console.log(num)
// console.log (Math.round(num))
// console.log (Math.floor(num))
// console.log(Math.ceil(num))


// --------------------------CHAPTER 26-30 QUESTION 02--------------------------------------

// var num = prompt("ENTER A NEGATIVE NUMBER ")
// console.log(num)
// console.log (Math.round(num))
// console.log (Math.floor(num))
// console.log(Math.ceil(num))
// []

// --------------------------CHAPTER 26-30 QUESTION 03--------------------------------------
// var num = prompt("ENTER A NUMBER")
// console.log (Math.abs(num))

// --------------------------CHAPTER 26-30 QUESTION 04--------------------------------------
// var dice = Math.floor(Math.random()*6 +1) 
// console.log(dice)

// --------------------------CHAPTER 26-30 QUESTION 05--------------------------------------
// var toss = Math.round(Math.random() *1 +1)
// if (toss === 1){
//     console.log("HEADS")
// }
// else{
//     console.log("TAILS")
// }

// --------------------------CHAPTER 26-30 QUESTION 06--------------------------------------
// var random = Math.round(Math.random()*100 +1)
// console.log(random)

// --------------------------CHAPTER 26-30 QUESTION 07--------------------------------------

// var weight = prompt("ENTER YOUR WEIGHT in Kgs")
// alert( "THE WEIGHT OF USER IS "+parseInt(weight)+ " Kgs" )
// --------------------------CHAPTER 26-30 QUESTION 08--------------------------------------

// var secretNum = 6
// var close1 = 5
// var close2 = 7
// var guess = prompt("GUESS THE SECRET NUMBER FROM 1 TO 10")
// if (guess === secretNum){
//     alert(" CONGRATULATIONS! YOU GUESSED IT")
// }
// else if (guess == close1|| guess == close2){

//     alert("CLOSE ! TRY AGAIN")
// }
// else{
//     alert("TRY AGAIN")
// }


// --------------------------PRACTICE OF CHAPTER 31-34--------------------------------------
// --------------------------CHAPTER 31-34 QUESTION 01--------------------------------------

// var crr = new Date()
// console.log(crr) 

// --------------------------CHAPTER 31-34 QUESTION 02--------------------------------------
// var months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
// var crr = new Date
// var month = crr.getMonth()
// console.log(months[month])


// --------------------------CHAPTER 31-34 QUESTION 03--------------------------------------
// var days = ["SUN", "MON","TUE","WED","THURS","FRI","SAT"]
// var crr = new Date ()
// var crrDay = crr.getDay()
// console.log(days[crrDay])


// --------------------------CHAPTER 31-34 QUESTION 04--------------------------------------

// var days = ["SUN", "MON","TUE","WED","THURS","FRI","SAT"]
// var crr = new Date ()
// var crrDay = crr.getDay()
// if (crrDay === "SAT" || crrDay === "SUN"){
//     alert("ITS FUN DAY")
// }
// else{
//     alert("BORING")
// }
// --------------------------CHAPTER 31-34 QUESTION 05--------------------------------------
// var crr = new Date()
// var crrDate = crr.getDate()
// if (crrDate <15){
//     "FIRST FIFTEEN DAYS OF THE MONTH"
// }
// else{
//     alert("LAST FIFTEEN DAYS OF THE MONTH")
// }

// --------------------------CHAPTER 31-34 QUESTION 06--------------------------------------
// var crr = new Date()
// var milli = crr.getTime()
// var min = (milli /1000 ) 
// console.log(min)


// --------------------------CHAPTER 31-34 QUESTION 07--------------------------------------
// var crr = new Date()
// var time = crr.getHours()
// if ( time <= 12){
//     alert("ITS AM")
// }
// else {
//     alert("ITS PM")
// }

// --------------------------CHAPTER 31-34 QUESTION 08--------------------------------------
// var days = ["SUN", "MON","TUE","WED","THU","FRI","SAT"]
// var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
// var date = new Date("DEC 31., 2020")
// var laterDate =(days[date.getDay()]+" "+months[date.getMonth()] +" "+date.getDate()+" "+date.getFullYear()+" " +date.getHours() +date.getHours()+":"+date.getMinutes()+date.getMinutes()+":"+date.getSeconds()+date.getSeconds()+ " GMT+0500(PKT)")
// console.log(laterDate)      
// --------------------------CHAPTER 31-34 QUESTION 09--------------------------------------
// var ramadan= new Date("March 23, 2023")
// var crrDate = new Date ()
// var msRamadan = ramadan.getTime()
// var msCrr = crrDate.getTime()
// var calculation = msCrr - msRamadan
// var days =  calculation (/1000 /60 /60 /24 )
// alert(days)

// --------------------------CHAPTER 31-34 QUESTION 10--------------------------------------
// var reference = new Date("DECEMBEBR 05,2015 22:50:16 GMT+0500 (PKT)")
// var beginning = new Date("JANUARY 01, 2015 00:00:00")
// var msRef = reference.getTime()
// var msbeg= beginning.getTime()
// var difference = msRef - msbeg
// var total = difference /1000 /60
// console.log(total)

// --------------------------CHAPTER 31-34 QUESTION 11--------------------------------------
// var crr= new Date ()
// crr.setHours(2)
// console.log(crr)

// --------------------------CHAPTER 31-34 QUESTION 12--------------------------------------

// var date = new Date ()
// date.setFullYear(1923)
// alert(date)
// --------------------------CHAPTER 31-34 QUESTION 13--------------------------------------
//  var age = prompt("ENTER YOUR AGE")
//  var crrYear = 2023 
//  var birthYear = 2023 - age
//  console.log(birthYear)

// --------------------------CHAPTER 31-34 QUESTION 14--------------------------------------
// var customerName = "CUSTOMER NAME: ZAEEM"
// var month = "MONTH: APRIL"
// var noOfUnits =  380
// var chargePerUnit = 35
// var netAmount =  noOfUnits * chargePerUnit
// var late =  200
// var gross =  netAmount +late
// console.log(customerName)
// console.log(month)
// console.log("NO. OF UNITS "+noOfUnits)
// console.log("CHARGES PER UNIT: " +chargePerUnit)
// console.log("NET AMOUNT PAYABLE WITHIN DUE DATE: "+netAmount)
// console.log("LATE SURCHAGE:"+late)
// console.log("GROSS AMOUNT PAYABLE AFTER DUE DATE: "+gross)

// --------------------------PRACTICE OF CHAPTER 35-38--------------------------------------

// --------------------------CHAPTER 35-38 QUESTION 01--------------------------------------
// function crrDate(tellDate) {
//   var date=  new Date()
//  alert(tellDate)   
// }
// crrDate(new Date)

// --------------------------CHAPTER 35-38 QUESTION 02--------------------------------------

// function user (input){
//    var first = prompt("ENTER YOUR FIRST NAME")
//    var last = prompt("ENTER YOUR LAST NAME")
//    var full = first + " "+last
//    alert(full)
// }
// user()

// --------------------------CHAPTER 35-38 QUESTION 03--------------------------------------

// function sum (addition){
//    var firstNo = +prompt("ENTER ANY NUMBER")
//    var SecondNo = +prompt("ENTER ANY NUMBER")
//    var add = firstNo + SecondNo
//    alert(add)
// }
// sum()
// --------------------------CHAPTER 35-38 QUESTION 04--------------------------------------
// function operation (a){
//      var firstNo = +prompt("ENTER ANY NUMBER")
//    var secondNo = +prompt("ENTER ANY NUMBER")
//    var operate = prompt("ENTER AN OPERATION")

   
//    if (operate == "+"){
//       alert(firstNo + secondNo)
//    }
//    else if (operate == "-"){
//       alert (firstNo - secondNo)
//    }
//    else if (operate == "*"){
//       alert( firstNo *secondNo)

//    }
//    else if (operate =="/"){
//       alert( firstNo / secondNo)
//    }
//    else if ( operate == "%"){
//       alert( firstNo % secondNo)
//    }
//    else{
//       alert ("PLEASE ENTER VALID INPUT")
//    }
   
   
// }
// operation()




