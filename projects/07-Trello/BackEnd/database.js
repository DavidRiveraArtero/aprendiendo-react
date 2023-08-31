const mongoose = require('mongoose')
//const URI = 'mongodb://localhost/PersonalTrello'
const URI = 'mongodb://127.0.0.1:27017/Trello'
mongoose.connect(URI)
    .then(db => console.log("DB IS CONNECTED"))
    .catch(err => console.log(err))

module.exports = mongoose