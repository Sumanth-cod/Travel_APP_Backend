//to  get category data from the royter
const express = require('express');
const categoryController = require('../Controllers/categorycontroller');
const router = express.Router();

// const categoryHandler = require("../controllers/categoryController");
router.route("/")
    .get(categoryController)

module.exports =  router;