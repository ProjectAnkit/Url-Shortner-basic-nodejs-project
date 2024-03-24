const shortid = require("short-unique-id")
const Url = require("../Models/UrlSchema")
async function getUrlShortenMethod(req, res) {
    const body = req.body
    if(!body.url) return res.status(400).json({error: "url is needed !"})
    const {randomUUID} = new shortid({length: 8})
    const Shorturl = randomUUID()
    
    await Url.create({
        shortUrl: Shorturl,
        RedirectUrl: body.url,
        visitHistory: [],
    })
    
    res.json({shortid: Shorturl})
}

async function getredirectMethod(req,res){
    const shortid = req.params.shortid
    const urlentry = await Url.findOneAndUpdate({shortUrl: shortid},{$push : {visitHistory: {timestamp: Date.now()}}})
    
    res.redirect(urlentry.RedirectUrl)
}

async function getUrlanalyticsMethod(req,res){
    const shortid = req.params.shortid
    const urlentry = await Url.findOne({shortUrl: shortid})

    res.status(201).json({TotalClicks: urlentry.visitHistory.length,visitHistory: urlentry.visitHistory})
}


module.exports = {
    getUrlShortenMethod,
    getredirectMethod,
    getUrlanalyticsMethod
}