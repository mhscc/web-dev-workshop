# 🦜Introduction to CSS

CSS(Cascading Style Sheets) is the code that styles the web content. It is not a programming or markup language but rather a style-sheet language

>If HTML is the skeleton of our body then CSS is the skin

 

#### CSS Syntax 
![](../static_files/css_syntax.png)
There are 5 types of selectors:
![](../static_files/css_selector.png)


#### Ways to link CSS to HTML
- **Inline CSS** -  uses style attribute of the HTML element
  ```html
  /*/ This method is not ideal for complex CSS

  <h1 style="color:blue;">A Blue Heading</h1>
  ```

- **Internal CSS** - using style element in a HTML document

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