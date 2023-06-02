## Fresh Milk APP

### Description

It is a code test project that build a simple app to show the list of products and the detail of each product.

Here are some screenshots of the app:

![screenshot of home page](public/screenshot%20home.png)
![screenshot of product page](public/screenshot%20product.png)

### How to run the app

Just clone the repo and run `npm install` and `npm start` in the terminal.
There is only one envrionment variable `REACT_APP_BACKEND_HOST` need to be set. If you are using my [backend](https://github.com/Finns841594/pgp-milk-app-be) app as the backend, you can just ignore this and program will use the default `http://localhost:3002`.

### Tech Stacks

- React
- Redux (Redux-toolkit)
I know its unnecessary to use Redux in this project, I use it for picking up the knowledges.
- React-router
- Tailwindcss

### Resources

- [NextUI](https://next.material-ui.com/)
- [MUI](https://mui.com/)
- [A thank photo from unsplash](https://unsplash.com/)

### Features

- Shows all products by default
- Filter and search function integrated in the navbar
- Products can be filtered by type
- Simple search function that you can search milk by keyword in milk name
- Slider bar that relates to the storage amount
- A popup if you click the order button

### Others

- User system is not implemented, Login and Register button will not take you anywhere.

