const mongoose = require("mongoose")

function ConnectMongoDb(url) {
    mongoose.connect(url).then(()=> console.log("MongoDB connected"))
}

module.exports = ConnectMongoDb