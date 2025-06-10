const express = require('express');

const Category = require("../model/categorymodel");
const categories = require("../Data/category");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            await Category.deleteMany({});
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add categories to DB"})
        }
    })

module.exports = router;