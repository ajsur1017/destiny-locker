const e = require("express")
const express = require("express")
const Guardian = require("../models/guardian")
const GuardianFashion = require("../models/guardianFashion")

const router = express.Router()

router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect("/user/login")
    }
})

router.get("/", (req, res) => {
    res.render("guardian/index.ejs")
})
router.get("/indexLoadout", (req, res) => {
    Guardian.find({ username: req.session.username }, (err, guardian) => {
        res.render("guardian/indexLoadout.ejs", { guardian })
    })
})
router.get("/indexFashion", (req, res) => {
    GuardianFashion.find({ username: req.session.username }, (err, guardianFashion) => {
        res.render("guardian/indexFashion.ejs", { guardianFashion })
    })
})


router.get("/new", (req, res) => {
    res.render("guardian/new.ejs")
})

router.post("/", (req, res) => {
    // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    req.body.username = req.session.username
    Guardian.create(req.body, (err, guardian) => {
        res.redirect("/guardian")
    })
})

router.get("/:id/edit", (req, res) => {
    const id = req.params.id 
    Guardian.findById(id, (err, Guardian) => {
        res.render("guardian/edit.ejs", { guardian })
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    Guardian.findByIdAndUpdate(id, req.body, { new: true }, (err, guardian) => {
        res.redirect("/guardian")
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Guardian.findByIdAndRemove(id, (err, guardian) => {
        res.redirect("/guardian")
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Guardian.findById(id, (err, guardian) => {
        res.render("guardian/show.ejs", { guardian })
    })
})

module.exports = router