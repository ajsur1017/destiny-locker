const mongoose = require("./connection")

const { Schema, model } = mongoose

const guardianLoadoutSchema = new Schema(
    {
        helmOrnament: String, helmShader: String, gloveOrnament: String, gloveShader: String, chestOrnament: String, chestShader: String, bootOrnament: String, bootShader: String, classItemOrnament: String, classItemShader: String, fashionName: String, url: String ,username: String
    }
)
const GuardianFashion = model("GuardianFashion", guardianLoadoutSchema)

module.exports = GuardianFashion