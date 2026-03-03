# Gemcommerce cs-test Explanation + Live site

This is a simple front‑end prototype. It uses **React** for building the user interface and **Vite** to run and bundle the code quickly. Styling comes from Tailwind CSS.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 in your browser.

## Live Demo

The project is deployed on Vercel:

**Live URL:** [https://gemcommerce-cs-test.vercel.app/](https://gemcommerce-cs-test.vercel.app/)

## Project structure

- `src/App.jsx` – main entry, renders `ProductPage`.
- `src/pages/ProductPage.jsx` – placeholder for the Figma product page layout. The component uses React functional components, imports image assets, and assembles a responsive product layout with Tailwind CSS utilities.
- Styling is applied with Tailwind utility classes; no additional CSS.

## Technical Explanation

### How It Works (Plain Language)
- The page is defined in a React component (`src/pages/ProductPage.jsx`). In React, components are like functions that return HTML; here we use JSX, which lets us write HTML-like syntax directly in JavaScript.
- All icon and image files are stored locally in `src/icons` and imported at the top of the component. Each one is used in a standard `<img>` tag.
- Layout and styling are handled by Tailwind CSS utility classes added directly to the elements (`className="..."`). These classes control spacing (padding/margin), text size, colors, and responsive behavior so the page looks good on mobile and desktop.
- The structure uses semantic `<section>` blocks with CSS Grid and Flexbox to arrange content. For example, a three-column grid shows features around the central product image.
- No interactivity or dynamic data is required; the component renders the same content every time.

### Why I Chose the Stack
- **React** makes it easy to organize UI as reusable pieces, even for a simple page.
- **Vite** provides a fast development server and builds an optimized bundle when you run `npm run build`.
- **Tailwind CSS** lets me style quickly without writing separate CSS files. Its utility classes are written inline, which speeds up prototyping.
- **Node.js & npm** are used to manage dependencies and run scripts.

### Key Code Snippets
Here are a few representative pieces of the component to give a sense of how it’s structured and styled:

```jsx
// top of ProductPage.jsx: import assets
import React from 'react';
import food from '../icons/food 1.png';
import vet from '../icons/vet 1.png';
// ...other imports for icons and images
```

```jsx
// feature grid around central image
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
  {/* left column features */}
  <div className="space-y-8">
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <img src={food} alt="Real Food" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Real Food</h3>
        <p className="text-sm text-gray-600">Wholesome recipes for dogs with real meat and veggies.</p>
      </div>
    </div>
    {/* other feature items */}
  </div>
  
  {/* center image */}
  <div className="flex justify-center">
    <img src={cntr} alt="Pet Food Bowl" className="w-full max-w-xs rounded-full" />
  </div>
  
  {/* right column features */}
  <div className="space-y-8">
    {/* similar structure to left column */}
  </div>
</div>
```

```jsx
// bottom guarantee + payment logos
<div className="flex items-center gap-3">
  <img src={heartIcon} className="w-6 h-6" alt="Guarantee" />
  <span className="text-sm">30-day money back guarantee</span>
</div>
<div className="flex gap-4 flex-wrap">
  <img src={paypal} className="h-6" alt="PayPal" />
  <img src={visa} className="h-6" alt="Visa" />
  {/* ...other logos */}
</div>
```

Each element uses Tailwind utility classes such as `px-4`, `text-gray-600`, `lg:grid-cols-3`, and `bg-[#FF6B4A]`. You can copy these snippets directly into a new component to reproduce the layout.

### Try It Yourself
1. Clone the repo and run `npm install`.
2. Start development with `npm run dev`.
3. Open `http://localhost:5173` to see the page.

There’s also a live version deployed on Vercel:
[https://gemcommerce-cs-test.vercel.app/](https://gemcommerce-cs-test.vercel.app/)

Let me know if you’d like even more detail or have questions!

