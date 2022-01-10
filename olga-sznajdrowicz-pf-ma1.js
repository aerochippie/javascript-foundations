/*
1. Declare and initialise three variables with appropriate names and values.
 One variable with a number value, one with a boolean value and one with a string value.
*/
const number = 2;
const boolean = true;
const string = "string";

/*
 2. Declare two variables. 
 Assign your first name to one of the variables and your last name to the other. 
 Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.
 */

const name = "Olga";
const lastName = "Sznajdrowicz";
const fullName = Olga + " " + Sznajdrowicz;
console.log(fullName);

/*
3. Check the type of the value "frog" with the typeof operator and assign the result to a variable. 
Console log the variable value with a label, e.g. "The type of frog is ___".
*/

const variable = "frog";
console.log("The type of frog is " + typeof variable);

/*
4.Declare and initialise a variable called orderHasShipped with a boolean value.
 Create an if statement that checks if orderHasShipped is true. 
 If it is true, console log the string value "The order shipped". 
If not, console log the string value "The order did not ship".
*/

const orderHasShipped = false;

if (orderHasShipped == true) {
  console.log("The order has shipped");
} else {
  console.log("The order has not shipped");
}

/*
5. Create a for loop that counts from 7 to 13.
Console log the value of the counter variable inside the loop.
*/

for (let i = 1; i < 14; i++) {
  console.log("The number is " + i);
}
