# 📜 JavaScript DOM (Document Object Model)

DOM basically represents the HTML page and its CSS; using DOM, we can change the HTML content in javascript. What is the significance of this? **It enables us to create an interactive website.**

### ⭐ Getting Started

1.  Have a HTML file created
2.  CSS file is optional
3.  Create or use an existing JavaScript file
4.  Link the JavaScript file to he HTML file with `<script src="[filename].js"></script>
`

### DOM Manipulations

> #### <a href="https://www.youtube.com/watch?v=jmPgo2lyoLY" target="_blank">Video Tutorial</a>


The overall DOM manipulation procedure is to locate an HTML element and then use JavaScript to implement logic.

**Task:** Create a website that can that gets the value typed in the input box when clicked on the `submit` button and display it like `Yo whatsup {value}`. The website should not display anything if no value is typed when the button is clicked In addition create a `clear` button that resets everything when clicked.

**Solution:**

`index.html`

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <p>
      <label for="name">What's your name</label>
    </p>
    <input type="text" name="name" id="name" />
    <button onclick="generateText()">Click me</button>

    <h1 id="output"></h1>

    <button id="clear" onclick="clearText()" hidden>Clear</button>

    <script src="index.js"></script>
  </body>
</html>
```

Notice the `onclick` attribute calls the JavaScript function when the button is clicked.

`index.js`

```javascript
let clearButton = document.getElementById('clear');
let output = document.getElementById('output');
let input = document.getElementById('name');

function generateText() {
  if (input.value) {
    output.innerHTML = 'Yo whats up ' + input.value;

    clearButton.hidden = false;
  }
}

function clearText() {
  output.innerHTML = '';
  input.value = '';
  clearButton.hidden = true;
}
```

We first obtain the elements via `document.getElementId`. Then we write two functions, one to generate text when the `submit` button is pressed and another to reset everything when the `clear` button is pressed.

The `clear` button is initially set to hidden however when it is clicked, using DOM we can remove the `hidden` attribute.

**The files for this small exercise is located at `Examples` folder in this Github Repository**

## 🤿 Dig Deeper

Watch <a href="https://www.youtube.com/watch?v=5fb2aPlgoys" target="_blank">JavaScript DOM Manipulation - Full Course for beginners</a> if you would like to learn more about DOM.

However, it is not necessary because as you move forward web frameworks are a better option. 🫡

----
⏪ Back: [Javascript Basics](./JAVASCRIPT_BASICS.md) • ⏭️ Next: [Introduction to TypeScript](../typescript/FAMILIARIZETYPESCRIPT.md)
