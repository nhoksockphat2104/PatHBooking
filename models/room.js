const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    rentperday: {
        type: Number,
        require: true
    },
    imageurls: [],
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true,   
})
const roomModel = mongoose.model('room' , roomSchema)
module.exports = roomModel