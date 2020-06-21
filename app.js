// // ========================================================================chapter 21-25===================================================================

// Question 1
var first = window.prompt("Enter your First Name : ");
var last = window.prompt("Enter your last name");
var full_name = first+" "+last
document.write("HI "+ full_name)

// Question 2
var fav_mobile = window.prompt("Enter Name of your Favourite Phone:");
document.write('My Favourite Phone is : '+fav_mobile)
document.write("<br>length of string is : "+fav_mobile.length )
document.write("\n")
// Question 3
var country = "Pakistani " 
document.write("String :"+country)
document.write("<br>Index of 'n' : "+country.indexOf('n'));

// Question 4
var word = "Hello World"
document.write("String : "+word)
document.write("<br> Last Index of 'l' : "+word.lastIndexOf('l'));

// Question 5
var country = "Pakistani"
document.write("String : "+country)
document.write("<br> Character at Index 3 : "+country.charAt(3));
// Question 6
var first = window.prompt("Enter your First Name : ");
var last = window.prompt("Enter your last name");
var full_name = first.concat(last);
document.write("HI "+ full_name)



// Question 7
var city = "Hyderabad"
document.write("city :"+city)
document.write("<br> After replacement "+city.replace('Hyder','Islam'));

// Question 8
var message = "Ali and Sami are best friends. They play cricket and football together";
document.write("Paragraph : "+message)
document.write("<br> After Replacement of and: "+message.replace(/and/g,"&"))

// Question 9
var Value = "472"
document.write("Value : "+Value)
document.write("<br> Type : "+typeof Value)
Value = Number(Value)
document.write("<br>Value : "+Value)
document.write("<br> Type : "+typeof Value)

// Question 10
var string = window.prompt("Enter string")
document.write("User Input : "+string)
document.write("<br>UpperCase : "+string.toUpperCase())

// Question 11
var string = window.prompt("Enter Any String")
document.write("User Input : "+string)
string = string.toLowerCase().split(" ");
for(var i = 0; i < string.length;i++)
{
    string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1) + " ";
}
document.write("<br>Title Case :"+string.join(" ") )

// Question 12
var Number = 35.67
document.write("Number : "+Number)
Number = String(Number)
document.write("<br> Result : "+Number.replace(".",""))

// Question 13
var username = window.prompt("Enter your username : ")
for(var i = 0; i < username.length;i++)
{
    if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64 )
    {
        alert("Please enter avalid username")
    }
}

// Question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var order = window.prompt("Welcome to ABC Bakery! what do you want to order sir/Madam")
var find = false
for (var i =0; i< A.length; i++)
{
    if(order == A[i])
    {
        find = true
        break
    }
}
if (find == true)
{
    alert(order+" is available at index "+ i + " in our bakery")
}
else
{
    alert("We are sorry "+order+" is not available in our bakery")
}

// Question 15
var password = window.prompt("Enter Password")
var value= false
if(password.length >=6)
{
    if(password.charCodeAt(0) >=48 && password.charCodeAt(0) <=57)
    {
        alert("Password can't begin with a number")
    }
    else
    {
        password = password.toUpperCase()
        for ( var i =0; i < password.length;i++)
        {
            if((password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90) || (password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57))
            {
                value = true
            }
            else
            {
                alert("enter a valid password")
                break
            }
        }
    }
}
else
{
    alert("Password Mus be atleast 6 charcter long")
}

// Question 15
var university = "University of Karachi";
university = university.split("")
for (var i = 0;i<university.length;i++)
{
    var string = university[i]
    for (var j = 0 ; j < string.length;j++)
    {
        document.write(string.charAt(j)+"<br>")
    }
}

// Question 17
var string = window.prompt("Enter Any String")
document.write("User Input : "+string)
document.write("<br>Last character of input : "+string[string.length-1])

// Question 18
var string = "the quick brown fox jumps over the lazy dog"
document.write("String : "+string)
var count = (string.match(/the/g)).length;
document.write("<br>There are "+count+" occurneces of the word \'the\'")
// ========================================================================chapter 26-30===================================================================

// Question 1
var z = window.prompt("Enter Any Number")
z = Number(z)
document.write("Number : "+z)
document.write("<br>Round of value : "+Math.round(z))
document.write("<br>Floor value : "+Math.floor(z))
document.write("<br>Ceil Value : "+Math.ceil(z))

// Question 2
var z = window.prompt("Enter Any Negative Number")
z = Number(z)
document.write("Number : "+z)
document.write("<br>Round of value : "+Math.round(z))
document.write("<br>Floor value : "+Math.floor(z))
document.write("<br>Ceil Value : "+Math.ceil(z))

// Question 3
var z = window.prompt("Enter Any Negative Number")
z = Number(z)
document.write("The Absolute Value of "+z+" is : "+Math.abs(z))

// Question 4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write("Random Dice Value : "+diceRoll)

// Question 5
var coin = Math.floor( Math.random() * 2 ) +1;
document.write(coin)
if (coin == 1)
{
    document.write("<br> Random Coin Value: Heads ")
}
else
{
    document.write("<br> Random Coin Value: Tails ")
}

// Question 6
var RandomNumber = Math.floor( Math.random() * 100 ) +1;
document.write("Random Number Between 1 and 100  : "+RandomNumber)

// Question 7
var weight = window.prompt("Enter your weight in kilogram : ")
weight = parseFloat(weight)
document.write("The weight of user is "+weight+" kilograms")

// Question 8
var RandomNumber = Math.floor( Math.random() * 10 ) +1;
var userinput = window.prompt("Enter a number between 1 and 10: ")
if(userinput == RandomNumber)
{
    alert("Congratulation you won! ")
}
else
{
    alert("Try Again")
}



// ========================================================================chapter 31-34===================================================================
// Question 1
var date = new Date()
document.write(date)

// Question 2
var date = new Date()
Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.write("Current Month : "+Months[date.getMonth()])

// Question 3
var date = new Date()
days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
document.write("Today is "+days[date.getDay()])

// Question 4
var date = new Date()
if (date.getDay() == 0 || date.getDay() == 6)
{
    alert("It's a Fun Day! ")
}

// Question 5
var date = new Date(5/14/2000)
if (date.getDate() < 16)
{
    document.write("First Fifteen Days of Month")
}

// Question 6
var date = new Date("12-5-2015 22:32:23")
document.write("Current Date : "+date)
document.write("<br>Elipsed Millisecond since January 1, 1970: "+date.getTime())
document.write("<br>Elipsed Minutes since January 1, 1970: "+date.getTime()/60000)

// Question 7
var date = new Date()
var hour = date.getHours()
var prepend = hour > 12? 'PM':'AM'
document.write("It\'s "+prepend)

// Question 8
var date = new Date("12-31-2020")
document.write("Later Date: "+date)

// Question 9
var ramdan_date = new Date("04-24-2020")
var current_date = new Date()
var difference = current_date.getTime() - ramdan_date.getTime()
document.write(Math.floor(difference/(1000 * 3600 * 24))+" has been passed since first ramdan")

// Question 10
var date1 = new Date("01-01-2015 00:00:00")
var time1 = date1.getHours()*3600 + date1.getMinutes()*60+ date1.getSeconds();
var date2 = new Date("12-5-2015 22:50:16")
var time2 = date2.getHours()*3600 + date2.getMinutes()*60+ date2.getSeconds();
var result = time2-time1
document.write(result)

// Question 11
var date = new Date()
var age = window.prompt("Enter your age : ")
document.write("Your age is : "+age)
document.write("<br>your birth year is "+(date.getFullYear( )- age))

// Question 12
var customer_name = window.prompt("Coustomer Name : ")
var current_month = window.prompt("Current Month")
var Number_of_units = window.prompt("Number Of Units")
var Charge_per_units = window.prompt("Charge Per Units")
var Net_Amount_Payable = Number_of_units *  Charge_per_units
var late_charges = 350
var Gross_Amount_Payable = Net_Amount_Payable + late_charges
document.write("Customer Name "+customer_name)
document.write("<br>Current Month "+current_month)
document.write("<br>Number of units "+Number_of_units)
document.write("<br>Charges per unit "+Charge_per_units)
document.write("<br>Net Amount Payable (within Due Date) "+Net_Amount_Payable)
document.write("<br>Late Payment Surcharge "+late_charges)
document.write("<br>BilawaGross Amount Payable (after Due Date) "+Gross_Amount_Payable)
// ========================================================================chapter 35-38===================================================================
// Question 1
function date()
{
    var date = new Date()
    document.write(date)
}
date()

// Question 2
function fullname(first,last)
{
    document.write("HI "+first+" "+last)
}
fullname("Bilawal","Abbasi")

// Question 3
function sum(num1,num2)
{
    return num1+num2
}
num1 = Number(window.prompt("ENTER FIRST NUMBER : "))
num2 = Number(window.prompt("ENTER SECOND NUMBER : "))
document.write(sum(num1,num2))

// Question 4
function sum(num1,num2,opertaor)
{
    if(opertaor == "+")
    {
        return num1+num2
    }
    else if(opertaor == "-")
    {
        return num1-num2
    }
    else if(opertaor == "*")
    {
        return num1*num2
    }
    else
    {
        return num1/num2
    }

}
num1 = Number(window.prompt("ENTER FIRST NUMBER : "))
num2 = Number(window.prompt("ENTER SECOND NUMBER : "))
opertaor = window.prompt("ENTER OPERATION : ")
document.write(sum(num1,num2,opertaor))

// Question 5
function square(num1)
{
        document.write("Square of number "+num1+":"+parseInt(num1)*parseInt(num1));
}
var num1=window.prompt("Enter A Number :");
if(num1=="")
{
        alert("Error!....valid entry plzz");
        num1=prompt("Enter a number for squaring","");
}
square(num1);

// Question 6
function factorial(num1)
{
        var temp=1;
        for(var a=num1;a>=1;a--)
        {
                temp=a*temp;
        }
        document.write("Factorial of "+num1+" : "+temp);
}
factorial(4);

// Question 7
function start_end(num1,num2)
{
        for(var a=num1;a<=num2;a++)
        {
                document.write(a+" ");
        }
}

var num1=window.prompt("Enter Starting Number","");
var num2=window.prompt("Enter Ending Number","");
start_end(parseInt(num1),parseInt(num2));

// Question 8
function calculatehypotenuse()
{
        var base=Number(window.prompt("Enter base value : "));
        var perp=Number(window.prompt("Enter perpendicular value : "));

       function calculatesquare(num)
       {
                return num*num;
       }
       var Hypotenuse=Math.sqrt(calculatesquare(base)+calculatesquare(perp));
       document.write("Hypotenuse: "+Hypotenuse);
}
calculatehypotenuse();

// Question 9
function calc_area(width,height)
{
        area=width*height;
        document.write("Area of Reactangle : "+area);
}
document.write("Argument as variable"+"<br>");
var width=8;
var height=4;
calc_area(width,height);
document.write("<br>"+"Argument as value"+"<br>");
calc_area(8,4);

// Question 10
function palindrome(str)
{
    var count=str.length;
    var count2=parseInt(count/2);
    var count3=count-1;
    var temp=0;
    if(count/2!=0)
    {
        for(var a=0;a<count;a++)
        {
            for(var b=count3;b>=0;b--)
            {
                if(a==b)
                    break;
                if((str[a]==str[b])&&(a!=b))
                {
                    temp++;
                }              
            }
        }
        if(temp==count2)
        {
            document.write("String is palindrome");
        }
        else
        {
            document.write("String is not palindrome");
        }
    }
}
var string=window.prompt("Enter any string : ")
palindrome(string);

// Question 11
function titlecase(string)
{
    document.write("User Input : "+string)
    string = string.toLowerCase().split(" ");
    for(var i = 0; i < string.length;i++)
    {
        string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1) + " ";
    }
    return string.join(' ')    
}
document.write("<br>Output : "+titlecase("the quick brown fox"))

// Question 12
function longest(string)
{
    var j = 0
    var a = string.split(" ")
    var length = a[0].length
    for(var i =0 ; i<a.length;i++)
    {
        if(a[i].length > length)
        {
            length = a[i].length
            j = i
        }
    }
    return a[j]
}
document.write(longest("web development tutorial"))

// Question 13
function count_letter(string,letter)
{
    var count = 0
   for(var i =0;i<string.length;i++)
   {
       if(string[i] == letter)
       {
           count+=1
       }
   }
   return count
}
var string = window.prompt("Enter Any String :")
var letter = window.prompt("Enter Any letter from String :")
document.write("Occurence of letter "+letter+" in "+string+" is : "+count_letter(string,letter))

// Question 14
function calcCircumference(radius)
{
    var circumference=2*Math.PI*r;
    document.write("Circumference of Circle having Radius "+radius+" : "+circumference);
}
function calcArea(radius)
{
        var area=Math.PI*r*r;
        document.write("Area of Circle having Radius "+radius+" : "+area);
}
calcCircumference(3);
document.write("<br>");
calcArea(2);

// ===============================================chapter 35-38==================