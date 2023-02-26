# 🦜Introduction to CSS
##[Video Tutorial](https://www.youtube.com/watch?v=1PnVor36_40)
---
CSS(Cascading Style Sheets) is the code that styles the web content. It is not a programming or markup language but rather a style-sheet language

>If HTML is the skeleton of our body then CSS is the skin




 

#### CSS Syntax 
![](../static_files/css_syntax.png)
There are 5 types of selectors:
![](../static_files/css_selector.png)


#### Ways to link CSS to HTML
- **Inline CSS** -  uses style attribute of the HTML element

    &nbsp;
  
  **`index.html`**
  ```html
  <!--  This method is not ideal for complex CSS  -->

  <h1 style="color:blue;">A Blue Heading</h1>
  ```

- **Internal CSS** - using style element in a HTML document

    &nbsp;

    **`index.html`**
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <style>
            body {
                background-color: powderblue;
            }
            h1 {
                color: blue;
            }
            p {
                color: red;
            }
        </style>
    </head>

    <body>
        <h1>Hello</h1>
        <p>There</p>

    </body>
    </html>
    ```
- **External CSS** - a CSS file  linked to the HTML document
  
    &nbsp;

    **`index.html`**
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <h1>Hello</h1>
        <p>There</p>

    </body>
    </html>
    ```
    **`index.css`**
    ```css
    body {
    background-color: powderblue;
    }

    h1 {
        color: blue;
    }

    p {
        color: red;
    }
    ```

#### Additional Guides
There is no need to purposely remember all the CSS properties. Visual Studio Code have built-in auto-hint for CSS. You can always search online on CSS properties

- [CSS Reference](https://cssreference.io/)