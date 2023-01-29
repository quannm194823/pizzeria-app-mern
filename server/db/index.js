const mongoose = require('mongoose')

mongoose.set('strictQuery',false);
mongoose
    .connect('mongodb://localhost:27017/pizzeria-app', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db