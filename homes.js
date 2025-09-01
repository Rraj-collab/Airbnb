// homes.js - corrected version
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('addHome', { registeredHomes: registeredHomes });
    });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, location, rating } = req.body;
    const home = new Home(houseName, price, location, rating);
    home.save();
    
    Home.fetchAll((registeredHomes) => {
        res.render('homeAdded', { registeredHomes: registeredHomes });
    });
};

exports.getHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("home", { registeredHomes : registeredHomes });
    });
};