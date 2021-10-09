require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const GuardianRouter = require("../controllers/guardian")
const UserRouter = require("../controllers/user")
const HomeRouter = require("../controllers/home")
const session = require('express-session')
const MongoStore = require("connect-mongo")

const middleware = (app) => {
    app.use(morgan("tiny"))
    app.use(methodOverride("_method")) 
    app.use(express.urlencoded({extended: true})) 
    app.use(express.static("public")) 
    app.use(session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false
    }))
    app.use("/guardian", GuardianRouter)
    app.use("/user", UserRouter) 
    app.use("/", HomeRouter)
}

module.exports = middleware
