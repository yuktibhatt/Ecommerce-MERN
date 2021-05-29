const express = require("express");
const app = express();

const port = 8000;
app.get("/login", (req, res) => {
    return res.send("You are visiting login route..");
});


const admin = (req, res) => {
    return res.send("This is admin dasboard"); 
};

const isAdmin = (req, res, next) => {
    console.log("isAdmin running")
    next();
};
const isLoggedin = (req, res, next) => {
    console.log("Logged In!")
    next();
};

app.get("/admin", isLoggedin, isAdmin, admin);



app.get("/signup", (req, res) => {
    return res.send("You are visiting signup route..");
});


app.listen(port, () => {
    console.log("Server is up and running...");
});



