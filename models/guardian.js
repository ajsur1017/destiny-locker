const mongoose = require("./connection")

const { Schema, model } = mongoose
const guardianSchema = new Schema(
    {
        class: String, subClass: String, jump: String, grenade: String, classAbility: String, keneticWeapon: String, keneticWeaponMod: String, isExoticKenetic: Boolean, energyWeapon: String, energyWeaponMod: String, isExoticEnergy: Boolean, heavyWeapon: String, heavyWeaponMod: String, isExoticHeavy: Boolean, helmet: String, isExoticHelm: Boolean, helmetEnergyType: String, helmetMobility: Number, helmetResilience: Number, helmetRecovery: Number, helmetDiscipline: Number, helmetIntelect: Number, helmetStrength: Number, helmMod1: String, helmMod2: String, helmMod3: String, helmMod4: String, helmMod5: String, glove: String, isExoticGlove: Boolean, gloveEnergyType: String, gloveMobility: Number, gloveResilience: Number, gloveRecovery: Number, gloveDiscipline: Number, gloveIntelect: Number, gloveStrength: Number, gloveMod1: String, gloveMod2: String, gloveMod3: String, gloveMod4: String, gloveMod5: String, chest: String, isExoticChest: Boolean, chestEnergyType: String, chestMobility: Number, chestResilience: Number, chestRecovery: Number, chestDiscipline: Number, chestIntelect: Number, chestStrength: Number, chestMod1: String, chestMod2: String, chestMod3: String, chestMod4: String, chestMod5: String, boot: String, isExoticBoot: Boolean, bootEnergyType: String, bootMobility: Number, bootResilience: Number, bootRecovery: Number, bootDiscipline: Number, bootIntelect: Number, bootStrength: Number, bootMod1: String, bootMod2: String, bootMod3: String, bootMod4: String, bootMod5: String, classItem: String, mobility: Number, resilience: Number, recovery: Number, discipline: Number, intelect: Number, strength: Number, classItemMod1: String, classItemMod2: String, classItemMod3: String, classItemMod4: String, classItemMod5: String, loadoutName: String, username: String
    })

const Guardian = model("Guardian", guardianSchema)

module.exports = Guardian