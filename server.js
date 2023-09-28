
const express = require("express");
const Item = require('./models/itemModel');
const db = require("./db");
const app = express();

app.use(express.json());

const itemsRoute = require('./routes/itemsRoute')

app.use('/api/items/' , itemsRoute)

app.get("/", (req, res) => {
    res.send("Server working");
});



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



