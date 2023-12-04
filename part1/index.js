/* const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connect = require("./config/db");
var cors = require("cors");
connect();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600) res.status(err.status);
    else res.status(500);
    res.render("error");
});
const employeesRouter = require("./routes/employeeRouter");
app.use("/api/v1", employeesRouter);

app.get("/", (req, res) => {
    res.send("working");
});

app.listen(PORT, () => {
    console.log("Server running in port " + PORT);
});

 */



// 101354581 - Diego Plata

var express = require('express');
var app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/COMP3123_Assignment1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const Schema = mongoose.Schema;

// emplyee schema
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const employeeSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true, maxlength: 50 },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'], maxlength: 25 },
  salary: { type: Number, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;


//user Schema


const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true, unique: true, maxlength: 100 },
  email: { type: String, required: true, unique: true, maxlength: 50 },
  password: { type: String, required: true, maxlength: 50 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;



// check application is running

app.get("/", (req, res)=>{
  res.write("Application is running");
  res.end();
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });