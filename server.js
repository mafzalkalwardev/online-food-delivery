require("dotenv").config();

const express = require("express");
// const mongoose = require("mongoose");
const Order = require("./models/Order");

const app = express();

app.use(express.json());

// mongoose
// .connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("MongoDB Connected");
// })
// .catch((err) => {
//     console.log(err);
// });

app.get("/", (req, res) => {
    res.send("Online Food Delivery API Running");
});

app.post("/orders", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.get("/orders", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.get("/payment", (req, res) => {
    res.send("Payment Module Active");
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});