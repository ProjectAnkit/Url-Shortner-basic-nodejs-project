const express = require("express")
const {getUrlShortenMethod, getredirectMethod, getUrlanalyticsMethod} = require("../Controllers/url");
const router = express.Router()

router.post('/url',getUrlShortenMethod)

router.get('/url/:shortid',getredirectMethod)

router.get('/url/analytics/:shortid',getUrlanalyticsMethod)

module.exports = router;