# 🚀JavaScript Basics
JavaScript is the most popular programming language for web development

### Getting Started
1. Ensure that live server extension is installed
2. Ensure a HTML document(e.g `index.html`) is created
2. CSS file is optional
4. Install NodeJS if you have not done so
5. Create a JavaScript file `index.js` in the folder
6. In your HTML file, enter this code on a new line before the `</body>` tag
    ```html
    <!DOCTYPE html>
    <html>
        <body>
             <!--some code-->  

            <!-- Add this line of code -->
            <script src="index.js"></script>
        </body>
    </html>
    ```
    &nbsp;


#### Variables, Data Types and Operators

> ####  [Video Tutorial](https://www.youtube.com/watch?v=edlFjlzxkSI)

Think of variables as containers that stores values. To declare a variable use `let` or `const` followed by variable name, equal sign then the value

To print out the statement use `console.log()`

```javascript
let myName = "Bob Joe";
const word = "Big";

/* print the word*/
console.log(word);

/*print myName */
console.log(myName);


/*This is a comment it does not have any effect on the code */
```

#### [What is the difference Between const and let?](https://www.youtube.com/watch?v=RE6qf3As-XU)

There are **5** commonly used data types:
![](/static_files/javascript_datatypes.png)

> #### [What are operators?](https://www.youtube.com/watch?v=FZzyij43A54)

&nbsp;

#### Where do I see JavaScript outputs?
1. Open the developer tools in your browser by clicking `F12` or `ctrl+shift+i`
2. Go to `console` tab

#### How do I run the JavaScript on my terminal?
1. Open a new terminal on Visual Studio Code
2. Type in `node [filename].js`  in our case type in `node index.js`


&nbsp;


### Conditionals

> ####  [Video Tutorial](https://www.youtube.com/watch?v=IsG4Xd6LlsM&t=135s)
Conditionals are used when you want your program to perform different actions based on different conditions. In short, if we want to have logic in our program we use conditionals

**Question:** print `Hello` if `myAge` is greater than `10`, `No` if `myAge` is between `5` and `10` inclusive, `HAHAHA` if `myAge` is less than `5`
```javascript
let myAge = 11;


/* solution here */
```

**Solution:** use conditional statements
```javascript
let myAge = 11;

/* solution here */
if (myAge > 10){
    console.log("Hello")
} else if(myAge >=  5) {
    console.log("No")
}else{
    console.log("HAHAHA")
}

```

&nbsp;


### Functions
A block of code that performs certain task

A function can have parameters.
- Paramater are listed inside the paranthesis of the function
- Arguments are the values recieved by the function when it is invoked


> #### [Video Tutorial](https://www.youtube.com/watch?v=N8ap4k_1QEQ&t=4s)

 **Example:**
```javascript
/* create a function that will print your age + 5 */
let myAge = 10;

function getAge(age) {
    return age +5;
}

console.log(getAge(myAge))

/* output */
15


/* The parameter is age and the argument in this case is myAge or 10.*/
```

From the code above we see that the function returns age + 5. Keep in mind that **JavaScript will not execute any code after the return statement** because the function stops executing when it reaches there.

To use a function simply do `[function name](argument)`, in our case it is `getAge(myAge)`


**Scope of variables:**
Variables declared inside a function can only be used  within the function
```javascript

/* will not work */
console.log(car);

function myFunction() {
    let car = "toyota";

    /* will work */
    console.log(car);
}

/* will not work */
console.log(car);
```

#### But why use functions?
> The golden rule in programming is reusable reusable reusable
> Define the code once, use it many times

&nbsp;
### What if my code to execute many times?
Use loops, loops can execute a block of code a number of times

> #### [Video Tutorial](https://www.youtube.com/watch?v=Kn06785pkJg&t=297s) 


There are **5 types of loops**: `while` loop, `for` loop, `for/in` loop, `for/of` loop and `do/while` loop

#### `for` loop
```javascript
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

for (let i = 0; i<5; i++) {
  console.log(i);
}

// result
0
1
2
3
4
```

#### `for/in` loop
```javascript
const person = {fname:"John", lname:"Doe", age:25};

for (let x in person){
    console.log(person[x])
}

//result
John
Doe
25
```
`x` is the key so when we do `person[x]` we are basically saying `person[fname]`

#### `for/of` loop
```javascript
const numbers = [1,2,3,4,5,6];

for (let number of numbers){
    console.log(numbers);
}

//result
1
2
3
4
5
6
```

#### `while` loop
```javascript
while (condition) {
  // code block to be executed
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// result
0
1
2
3
4
```

#### `do/while` loop
```javascript

let i = 5;

do {
    console.log(i);
    i++
}while(i>5 && i< 10)

//result
5
6
7
8
9
```
The code will execute once and then check the condition therefore `5` was printed even though it is not between `5` and `10` exclusive

&nbsp;

#### To dive deeper into JavaScript

Take some time and watch this [video](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=4595s) or go through this [Modern JavaScript Tutorial](https://javascript.info/)

Good luck 🙋‍♂️