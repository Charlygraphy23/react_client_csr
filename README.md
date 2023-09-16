# react_client_csr

This is an example how we can achive react CSR from scratch

Doc link - [here](https://galvanized-wormhole-a98.notion.site/React-CSR-4056c24aaa594d43a3509550cddd18e7?pvs=4)

# React CSR

Let’s create a React app with client-side rendering (CSR) from scratch.

Prerequisites -

- Knowledge of React - because we are building a React app
- Knowledge of Javascript - because react is a javascript library
- Knowledge of Webpack - because the app needs to be served on the client side, and all the js file needs to be bundled so that they can be run in all browser

Let's start by cloning the project using

```
  git clone https://github.com/Charlygraphy23/react_client_csr

```

After that run `npm i` and start the development server `npm run start:dev`.

After the successful run you will see this in your terminal
<img width="923" alt="Screenshot 2023-09-14 at 9 49 47 AM" src="https://github.com/Charlygraphy23/react_client_csr/assets/46165735/eee38b34-eb50-43a4-bd20-df7a191a20a6">

### Hurrey🎉

### Demo link - [here](https://precious-maamoul-c93c78.netlify.app/)

If we see our browser at `http://localhost:3000` we should be able see this -
![ezgif com-video-to-gif (1)](https://github.com/Charlygraphy23/react_client_csr/assets/46165735/c0b2bf1c-de32-4a5f-965f-6f50ce956345)

Finally in the network tab -

![ezgif com-video-to-gif](https://github.com/Charlygraphy23/react_client_csr/assets/46165735/540ccf70-76b3-4995-a384-2f7dffdafb3d)

here an empty index.html file has been fetched with a bundle.js. `createRoot` will render the bundle.js file inside this

```html
<div id="root"></div>
```
