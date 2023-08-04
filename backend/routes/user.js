const express = require("express");
const router = express.Router();
const userCtr = require("../controllers/userController");

router.post("/login", userCtr.login)
router.post("/signup", userCtr.signup)


module.exports = router;