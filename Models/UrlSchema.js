const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    shortUrl : {
        type: String,
        required: true,
    },
    
    RedirectUrl: {
        type: String,
    },
    
    visitHistory: [{timestamp : {type: Number}}],
},
{timestamps: true})

const Url = mongoose.model('Url',urlSchema)

module.exports = Url