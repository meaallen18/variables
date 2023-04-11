/*let and const Exercise
In this exercise, you’ll refactor some ES5 code into ES2015.

ES5 Global Constants

var PI = 3.14;
PI = 42; // stop me from doing this!

ES2015 Global Constants
/* Write an ES2015 Version */

/*Quiz
What is the difference between var and let?
What is the difference between var and const?
What is the difference between let and const?
What is hoisting?*/

var PI = 3.14;
PI =42

//Assignment:

const PI = 3.14;
PI = 1 //Error

/*Var can be redeclared and reassigned, while let cannot be redeclared. Let is block scope.

Var can be redeclared and reassigned, while const cannot. Const is block scope.

Let can be reassigned, const cannot be reassigned.

Hoisting is a JS behavior in which variable and function declarations are moved to the top- 
of their respective scopes during the compile phase, before the code has run. The variables 
and functions can be used in the code before they are declared, but only with var, let, an const.*/