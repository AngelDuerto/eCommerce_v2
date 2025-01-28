import dotenv from "dotenv"; //load environment variables
import express from "express";
import mysql from "mysql2";
import cors from "cors";

dotenv.config(); //load environment variables from .env file
const app = express()
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//create MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected too mySQL database!")
})

// API endpoint to get products
app.get("/api/products", (req, res) => {
    const { price, category, collection, size } = req.query;

    let query = "SELECT * FROM products WHERE price";
    // let query = "SELECT * FROM products WHERE 1=1";
    const queryParams = []

    if (price) {
        if (price === "60+") {
            query += " AND price > ?";
            queryParams.push(60);
        } else {
            const priceRangeOne = price.split("-")[0];
            const priceRangeTwo = price.split("-")[1];
            query += " AND price BETWEEN ? AND ?";
            queryParams.push(priceRangeOne, priceRangeTwo);
        }
    }
    if (category) {
        query += " AND category = ?";
        queryParams.push(category);
    }
    if (collection) {
        query += " AND collection = ?";
        queryParams.push(collection);
    }
    if (size) {
        query += " AND size = ?";
        queryParams.push(size);
    }

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error("Error fetching products:", err);
            res.status(500).send("Server error");
        } else {
            res.json(results);
        }
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});