const express = require("express")
const { signUp } = require("../controller/authController")
const authRouter = express.Router() 
authRouter.post("/api/v1/user/",signUp)
module.exports = authRouter