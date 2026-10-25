# Paradise Nursery

Paradise Nursery is a responsive React shopping cart for a modern houseplant shop. It includes a landing page, plant collection, story page, and a dynamic Redux-powered cart.

## Features

- Responsive landing page with calls to action
- Plant collection organized by categories
- Add products to cart with duplicate-item quantity handling
- Increase, decrease, and delete cart items
- Live cart item count and order total
- Continue Shopping and Checkout actions

## Run locally

```bash
npm install
npm run dev
```

Create the public GitHub repository `e-plantShopping`, push all files, and deploy the production build with `npm run build`.

## Key project files

- `src/App.jsx` - routes, navigation, and landing page
- `src/ProductList.jsx` - product categories and product cards
- `src/CartSlice.jsx` - Redux cart state and selectors
- `src/CartItem.jsx` - cart item controls and order summary
- `src/AboutUs.jsx` - brand story page
- `src/App.css` - responsive visual design
