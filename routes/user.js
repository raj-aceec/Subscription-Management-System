const express = require('express');
const app = express();
const db = require('../db');

app.get("/users", (req, res) => {
    const q = "SELECT * FROM Subscribers";
    db.query(q, (err, data) => {
        if (err)
            return res.status(500).json({ message: "Error in fetching data", subscribers: err });
        return res.status(200).json({ message: "Subscribers data fetched successfully", subscribers: data });
    });
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const q = "SELECT * FROM Subscribers WHERE id = ?";
    db.query(q, [id], (err, data) => {
        if (err)
            return res.status(500).json({ message: "Error in fetching data", subscribers: err });
        if (data.length === 0)
            return res.status(404).json({ message: "Subscriber data not found", subscribers: null });
        return res.status(200).json({ message: "Subscriber data fetched successfully", subscribers: data });
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO Subscribers(`id`, `Subscription_type`, `start_data`, `end_date`, `p_status`, `last_p_date`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.Subscription_type,
        req.body.start_data,
        req.body.end_date,
        req.body.p_status,
        req.body.last_p_date
    ];

    db.query(q, [values], (err, data) => {
        if (err)
            return res.status(500).json({ message: "Error in inserting data", subscribers: err });
        return res.status(201).json({ message: "Subscriber data added successfully", subscribers: data });
    });
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const q = "UPDATE Subscribers SET  `Subscription_type`= ?, `start_data`= ?, `end_date`= ?, `p_status`= ?, `last_p_date`= ? WHERE id = ?";
    const values = [
        req.body.Subscription_type,
        req.body.start_data,
        req.body.end_date,
        req.body.p_status,
        req.body.last_p_date
    ];

    db.query(q, [...values, id], (err, data) => {
        if (err != null)
            return res.status(500).json({ message: "Error in updating data", subscribers: err });
        if (data.affectedRows === 0)
            return res.status(404).json({ message: "Subscriber not found", subscribers: null });
        return res.status(200).json({ message: "Subscriber data updated successfully", subscribers: data });
    });
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM Subscribers WHERE id = ?";
    db.query(q, [id], (err, data) => {
        if (err)
            return res.status(500).json({ message: "Error in deleting data", subscribers: err });
        if (data.affectedRows === 0)
            return res.status(404).json({ message: "Subscriber not found", subscribers: null });
        return res.status(200).json({ message: "Subscriber data deleted successfully", subscribers: data });
    });
});

module.exports = app;