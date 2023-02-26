# 📜 JavaScript DOM(Document Object Model)
DOM basically represents the html page and its CSS, with DOM we could change the content of the HTML in javascript. Why is this important? **It allows us to create a website that is interactive.**

### Getting Started
1.  Have a HTML file created
2.  CSS file is optional
3.  Create or use an existing JavaScript file
4.  Link the JavaScript file to he HTML file with `<script src="[filename].js"></script>
`




### DOM Manipulations
> #### [Video Tutorial](https://www.youtube.com/watch?v=jmPgo2lyoLY)

We start off by searching for an HTML element, then we use JavaScript to implement some logics.

**Task:** create a website that can that gets the value typed in the input box when clicked on the `submit` button and display it like `Yo whatsup {value}`. The website should not display anything if no value is typed when the `submit` button is clicked In addition create a `clear` button that resets everything when clicked.


**Solution:**

`index.html`
```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>
        <label for="name">What's your name</label>
    </p>
    <input type="text" name="name" id="name">
    <button onclick="generateText()">Click me</button>

    <h1 id="output"></h1>

    <button id="clear" onclick="clearText()" hidden>Clear</button>

    <script src="index.js"></script>
</body>

</html>
```
Notice the `onclick` attribute, it calls the JavaScript function when the button is clicked.


`index.js`
```javascript
let clearButton = document.getElementById("clear");
let output = document.getElementById("output")
let input = document.getElementById("name");


function generateText() {

    if (input.value) {
        output.innerHTML = "Yo whats up " + input.value

        clearButton.hidden = false
    }
}

function clearText() {
    output.innerHTML = "";
    input.value = ""
    clearButton.hidden = true

}
```
We first get the elements through `document.getElementId`. Then we create two function, one to generate the text when `submit` button is clicked the other to reset everything when `clear` button is clicked

The `clear` button is initially set to hidden however when it is clicked we used DOM to remove this attribute.

**The files for this small exercise is at `Examples` folder in this Github Repository**
## Dig Deeper 🤿

Watch [JavaScript DOM Manipulation - Full Course for beginners](https://www.youtube.com/watch?v=5fb2aPlgoys) if you would like to learn more about DOM. 

However, it is not necessary because as you move forward web frameworks are a better option. 🫡