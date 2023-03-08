# ⏭️ Next.JS Introduction
Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites


### Setting Up NextJS Project
1. Make sure NodeJS is installed on your pc. 
2. Follow the instructions on this [video](https://www.youtube.com/watch?v=kap8xrWMNDM) to integrate TailwindCSS into your project
3. Open a new terminal in Visual Studio Code and type `yarn dev` or `npm run dev` to run the app


### JSX
It is a syntax extension to JavaScript that lets us write HTML inside a JavaScript file

**HTML to JSX**
`HTML`
```html


<div>
    <h1 class="awesome">Hello There</h1>
</div>
<p>It's friday</p>
```
`JSX`
```jsx
function HomePage() {
    return (
        <>
        <div>
            <h1 className="awesome">Hello There</h1>
        </div>
        <p>It's friday</p>
        </>
    )
}
```
Notice how in JSX, HTML can be written inside a JavaScript Function but only in the return block

**The Rules of JSX**
1. Must only return a single root element
2. All tags must be closed
3. Attribute names are mostly in camelCase
   1. e.g `className` instead of `classname`


Use this [converter](https://transform.tools/html-to-jsx) to help check if your JSX is correct


### Pages and Routing
In a NextJS, routing is very simple. `index.jsx` would automatically be the homepage, `[page_name].jsx` are the other pages. For example, if I want to see an about page when I search `www.abababa.com/about` all I have to do is create a `about.jsx` file.

To learn more watch this [video](https://www.youtube.com/watch?v=zktJ8-k0JDc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=2).


### Component
Components is a block of code that is reusable virtually everywhere in a project. For example, every page in a website may have header and footer, and they can be written as a component to easily integrate it in a project. Without components, your application will need to write same code that constitutes header and footer for each of the pages in your website. Components essentially makes code less redundant. 

Reusability is the golden rule in programming. Always try to make your **reusable** and **readable**. 

Also, it is generally a good idea to create a folder named "Components", and organize each of your components to a distinct file to not have difficulty browsing through your own code.

Carefully watch this video to learn how to create and use a [component](https://www.youtube.com/watch?v=MJT_WXdSPjE&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=4) in your NextJS project.

### Linking Pages
How do I make my website navigate to another page when I press a button?

NextJS has many built-in components, to navigate to other pages we use the `Link` component. It is very similar to the anchor tag of HTML.

**Example**
```jsx

import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  )
}

export default Home
```

These are the very basics of NextJS, if yould like to learn more watch the whole [series](https://www.youtube.com/watch?v=zktJ8-k0JDc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=3)


## [TailwindCSS](https://tailwindcss.com/)

A quick overview of [TailwindCSS](https://www.youtube.com/watch?v=mr15Xzb1Ook&t=26s)

Tailwindcss is a CSS framework, it makes designing website faster and easier. Overall, there is not much difference between CSS and TailwindCSS. It's also not too hard to learn because Visual Studio Code give hints.

For styling you don’t have to memorize everything, the documentation is always available on the official website. Go to https://tailwindcss.com/docs/ and search up the styling you wish to add, read the documentation and follow it. 

To learn more about TailwindCSS, I suggest going over this [series](https://www.youtube.com/watch?v=kMiMlB5PZRM&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=13).

Good luck 🫡


