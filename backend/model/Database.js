const mongoose = require("mongoose")

const url = process.env.DATA_BASE;

function Database() {
    mongoose.connect(url)
        .then((db) => {
            console.log("databse connected!!!");
        }).catch((err) => {
            console.log("database connection problem..", err)
        })
}

module.exports = Database;