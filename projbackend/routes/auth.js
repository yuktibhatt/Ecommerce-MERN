var express = require("express");
var router = express.Router()

router.get("/signout", (req, res) => {
    res.json({
        message : "User Signout Success"
    });
});

module.exports = router;

