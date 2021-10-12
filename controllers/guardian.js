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
// Main route to primary index
router.get("/", (req, res) => {
    res.render("guardian/index.ejs")
})
// Route to loadout index
router.get("/indexLoadout", (req, res) => {
    Guardian.find({ username: req.session.username }, (err, guardian) => {
        res.render("guardian/indexLoadout.ejs", { guardian })
    })
})
// Route to fashion index
router.get("/indexFashion", (req, res) => {
    GuardianFashion.find({ username: req.session.username }, (err, guardianFashion) => {
        res.render("guardian/indexFashion.ejs", { guardianFashion })
    })
})
// Route to new loadout
router.get("/newLoadout", (req, res) => {
    res.render("guardian/newLoadout.ejs")
})
// Route to new Fashion
router.get("/newFashion", (req, res) => {
    res.render("guardian/newFashion.ejs")
})
// POST route for fashion
router.post("/indexFashion", (req, res) => {
    req.body.username = req.session.username
    GuardianFashion.create(req.body, (err, guardianFashion) => {
        res.redirect("/guardian/indexFashion")
    })
})
// POST route for loadout
router.post("/indexLoadout", (req, res) => {
    req.body.username = req.session.username
    Guardian.create(req.body, (err, guardian) => {
        res.redirect("/guardian/indexLoadout")
    })
})
// EDIT ROUTES
// FASHION EDIT
router.get("/:id/edit", (req, res) => {
    const id = req.params.id 
    GuardianFashion.findById(id, (err, guardianFashion) => {
        res.render("guardian/editFashion.ejs", { guardianFashion })
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    GuardianFashion.findByIdAndUpdate(id, req.body, { new: true }, (err, guardianFashion) => {
        res.redirect("/guardian/indexFashion")
    })
})
// // LOADOUT EDIT
// router.get("guardian/loadout/:id/edit", (req, res) => {
//     const id = req.params.id 
//     Guardian.findById(id, (err, guardian) => {
//         res.render("guardian/editLoadout.ejs", { guardian })
//     })
// })

// router.put("/:id", (req, res) => {
//     const id = req.params.id
//     Guardian.findByIdAndUpdate(id, req.body, { new: true }, (err, guardian) => {
//         res.redirect("/guardian/indexLoadout")
//     })
// })
// DELETE ROUTES
// HOW DOES IT KNOW WHAT ONE TO USE? DOES IT TRY BOTH???Î›

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Guardian.findByIdAndRemove(id, (err, guardian) => {
        res.redirect("/guardian/indexLoadout")
    })
})
router.delete("/:id", (req, res) => {
    const id = req.params.id
    GuardianFashion.findByIdAndRemove(id, (err, guardianFashion) => {
        res.redirect("/guardian/indexFashion")
    })
})
// SHOW ROUTES
router.get("/loadout/:id", (req, res) => {
    const id = req.params.id
    Guardian.findById(id, (err, guardian) => {
        res.render("guardian/showLoadout.ejs", { guardian })
    })
})
router.get("/fashion/:id", (req, res) => {
    const id = req.params.id
    GuardianFashion.findById(id, (err, guardianFashion) => {
        res.render("guardian/showFashion.ejs", { guardianFashion })
    })
})

module.exports = router