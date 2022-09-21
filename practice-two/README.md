# REACT PRACTICE TWO

# OVERVIEW 

This document contains the estimation for the practicing with React hook.

# TIMELINE

* Estimate time: 4 days (29/08/22 - 05/09/22)
* Actual days: 8 days

# TECHNICAL STACK

* [React](https://reactjs.org/): A JavaScript library for building user interfaces
* [React Router](https://reactrouter.com/en/main): is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
* [TypeScript](https://www.typescriptlang.org/): is a programming language, an enhanced version of Javascript
* [Vite](https://vitejs.dev): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
* [Json server](https://github.com/typicode/json-server): Json server is a server that returns data in the form of json with full CRUD basic tasks.
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction): Storybook is a tool for UI development. It makes development faster and easier by isolating components.

# EDITOR

[Visual studio code](https://code.visualstudio.com/)

# TARGET

* Convert all of class component of practice-one to function component
* Apply react hooks for practice

# FEATURES

* Users can see the Home page with banners and some latest products. 
* Users can see some basic infos of the product (image, name, price).
* Users can see the All Latest Products page when clicking on “View All” on the Home page.
* Users can search (by product name), sort (by a -> z, z -> a, price), filter (by price).
* Users can see details of the product (image, name, price, description, the total number of products, additional information) when clicking on any products.
* Users can add the product to the card, after adding the item, the user can see the notification “The item added to your Shopping bag.” at the top of the page. 
* Users can see the shopping cart when clicking on the Cart icon. Users can update something in the cart: update the number of items, remove items, the cart total will be updated if they update items. 
* Users can go back to the shopping page when clicking on the “UPDATE CARD” button.

# GETTING STARTED

* Clone repository

```bash
    git clone git@gitlab.asoft-python.com:hoan.hoang/react-training.git
```

* Cd to the folder

```bash
    cd practice-two
```

* Checkout to the branch 

```bash
    git checkout practice-two
```

* Install the packages

```bash
    pnpm install
```

* Run the practice

```bash
    pnpm dev
```

* run the server 

```bash
    pnpm json-server
```

* Run the storybook

```bash
    pnpm storybook
```

* Create a .env file at your root folder, add a env var VITE_BASE_URL_ENDPOINT with default port for json-server is 3000, it can be use with other port.

```bash
    VITE_BASE_URL_ENDPOINT = http://localhost:{PORT}
```
