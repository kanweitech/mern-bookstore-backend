const express = require('express');
const app = express()
const cors = require("cors");

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config()

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://mern-bookstore-frontend-rho.vercel.app'],
    credentials: true
}))


// routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.use('/', (req, res) => {
        res.send("Book Store Server is running!");
    })
  
}

main().then(() => console.log("Mongodb connected successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})