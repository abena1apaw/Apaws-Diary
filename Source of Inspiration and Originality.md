Source of Documentation

I entered closed the route for the blog into the login/auth app in the dashboard.js

In the package json of the backend, I installed the new dependencies and added a concurrent package to run two apps at one time.
"blog-install": "npm install --prefix blog",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
"blog": "npm start --prefix blog",
    "dev": "concurrently \"npm run server\" \"npm run client\" \"npm run blog\""
  },
  "author": "Abena",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.25",

I added blog. js to the api folder to get blogs saved. 

I added bootstrap to the blog by importing bootsrap into the router.js in the components of the blog file.
I added bootstrap to the client side by importing the same bootstrap. I added a Navbar. js to the blog and client. I included a footerjs to the blog and client.
I modified the router by removing a div class to make the navbar broader. I also deleted the edit post from router.js. I changed the css for the login/auth app.
I added a proxy link to the package JSON to the blog and client.

I added a blog route to the server.js to save to mongo. I added cors to the server.js
