const mongoose = require('mongoose')
const URI = 'mongodb://localhost/PersonalTrello'

mongoose.connect(URI)
    .then(db => console.log("DB IS CONNECTED"))
    .catch(err => console.log(err))

module.exports = mongoose