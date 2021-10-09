const mongoose = require("./connection");
const Guardian = require("./guardian");
const GuardianFashion = require("./guardianFashion");
const User = require("./user");
const bcrypt = require("bcryptjs");

mongoose.connection.on("open", () => {
  const startGuardianLoadout = [
    {
      class: "Titan", subClass: "Siegebreaker", jump: "Strafe Lift", grenade: "Thermite Grenade", classAbility: "Towering Barricade", keneticWeapon: "Ace of Spades", keneticWeaponMod: "none", isExoticKenetic: true, energyWeapon: "Felwinter's Lie", energyWeaponMod: "icarus grip", isExoticEnergy: false, heavyWeapon: "Memory Interdict", heavyWeaponMod: "icarus grip", isExoticHeavy: false, helmet: "Lightkin Helm", isExoticHelm: false, helmetEnergyType: "Arc", helmetMobility: 28, helmetResilience: 4, helmetRecovery: 18, helmetDiscipline: 4, helmetIntelect: 32, helmetStrength: 4, helmMod1: "+10 Recovery", helmMod2: "Hands On", helmMod3: "Hand Cannon Targeting", helmMod4: "none", helmMod5: "none", glove: "Lightkin Gauntlets", isExoticGlove: false, gloveEnergyType: "Solar", gloveMobility: 13, gloveResilience: 4, gloveRecovery: 32, gloveDiscipline: 4, gloveIntelect: 26, gloveStrength: 9, gloveMod1: "+10 Recovery", gloveMod2: "Fastball", gloveMod3: "Shotgun Dexterity", gloveMod4: "Taking Charge", gloveMod5: "none", chest: "Pyrrhic Ascent Plate", isExoticChest: false, chestEnergyType: "Arc", chestMobility: 19, chestResilience: 4, chestRecovery: 19, chestDiscipline: 4, chestIntelect: 24, chestStrength: 32, chestMod1: "+5 Mobility", chestMod2: "Unflinching Shotgun Aim", chestMod3: "Unflinching Hand Cannon Aim", chestMod4: "Radiant Light", chestMod5: "none", boot: "Dunemarchers", isExoticBoot: true, bootEnergyType: "Arc", bootMobility: 18, bootResilience: 18, bootRecovery: 9, bootDiscipline: 14, bootIntelect: 18, bootStrength: 4, bootMod1: "+5 Recovery", bootMod2: "none", bootMod3: "Shotgun Scavenger", bootMod4: "High-Energy Fire", bootMod5: "none", classItem: "Pyrrhic Ascent Mark", classItemMobility: 22, classItemResilience: 2, classItemRecovery: 12, classItemDiscipline: 2, classItemIntelect: 2, classItemStrength: 2, classItemMod1: "+10 Recovery", classItemMod2: "none", classItemMod3: "Outreach", classItemMod4: "Powerful Friends", classItemMod5: "none", loadoutName: "PvP", username: "test"
    },
  ]
  const startGuardianFashion = [
    {
      helmOrnament: "Iron Forerunner Helm", helmShader: "Mercury Vex Chrome", gloveOrnament: "Lightkin Gauntlets", gloveShader: "Mercury Vex Chrome", chestOrnament: "Devastation Complex", chestShader: "Mercury Vex Chrome", bootOrnament: "Dunemarchers - Hip Wader", bootShader: "Mercury Vex Chrome", classItemOrnament: "Iron Forerunner Mark", classItemShader: "Mercury Vex Chrome", fashionName: "Pvp", url: "https://i.imgur.com/xzo7bdD.png", username: "test"
    },
  ]
  const starterUser = {
    username: "test",
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
  };


  Guardian.deleteMany({ username: "test" }, (err, data) => {
    User.create(starterUser, (err, username) => {
      Guardian.create(startGuardianLoadout, (err, guardian) => {
          console.log(guardian);
          GuardianFashion.create(startGuardianFashion, (err, guardianFashion) => {
            console.log(guardianFashion)
          mongoose.connection.close();
          });        
      });
    });
  });
});