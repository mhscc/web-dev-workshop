# ⏭️ Next.JS Introduction

Next.js is an open-source web development framework created by Vercel that allows React-based web applications to have server-side rendering and static website generation.

### Setting Up NextJS Project

1. If you haven't already, install NodeJS
2. Follow the instructions in this [video](https://www.youtube.com/watch?v=kap8xrWMNDM) to integrate TailwindCSS into your project
3. Open a new terminal in Visual Studio Code and type `yarn dev` or `npm run dev` to run the app

### JSX

JSX is a syntax extension to JavaScript that lets us write HTML inside a JavaScript file

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
  );
}
```

Notice how in JSX, HTML can be written inside a JavaScript Function **but only in the return block**

### The Rules of JSX

1. Must only return a single root element
2. All tags must be closed
3. Attribute names are mostly in camelCase
   1. e.g `className` instead of `classname`

Use this [converter](https://transform.tools/html-to-jsx) to help check if your JSX is correct

### Pages and Routing

> #### [Video Tutorial](https://www.youtube.com/watch?v=zktJ8-k0JDc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=2).

NextJS makes routing a breeze. For example, `index.jsx` is the homepage by default. To add more pages, simply create a new file with a different name. For example, an `about` page would be `about.jsx`.

### Component

> #### [Video Tutorial](https://www.youtube.com/watch?v=MJT_WXdSPjE&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=4)

A component is a piece of code that can be used almost anywhere in a project. For example, every page on a website may have a header and footer, which can be written as a component and reused throughout the project. Without components, your application will have to write the same code for each page of your website's header and footer. Components, in essence, make code less redundant.

Reusability is the golden rule in programming. Always try to make your **reusable** and **readable**.

Also, it is generally a good idea to create a folder named "Components", and organize each of your components to a distinct file to not have difficulty browsing through your own code.

### Linking Pages

How do I make my website navigate to another page when I press a button?

NextJS has many built-in components, to navigate to other pages we use the `Link` component. It is very similar to the anchor tag of HTML.

**Example**

```jsx
import Link from 'next/link';

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
  );
}

export default Home;
```

These are the very basics of NextJS, if yould like to learn more watch the whole [series](https://www.youtube.com/watch?v=zktJ8-k0JDc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=3)

## [TailwindCSS](https://tailwindcss.com/)

#### A quick overview of [TailwindCSS](https://www.youtube.com/watch?v=mr15Xzb1Ook&t=26s)

Tailwindcss is a CSS framework that makes website design faster and easier. Overall, there isn't much of a difference between CSS and TailwindCSS. It's also not too difficult to learn because Visual Studio Code provides hints.

You don't have to memorize everything for styling because the documentation is always available on the official website. Go to https://tailwindcss.com/docs/ and search for the styling you want to add, then read and follow the documentation.

To learn more about TailwindCSS, we suggest going over this [series](https://www.youtube.com/watch?v=kMiMlB5PZRM&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=13).

Good luck 🫡
