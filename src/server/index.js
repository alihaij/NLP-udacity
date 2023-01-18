var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// You could call it aylienapi, or anything else
var application_key= process.env.API_KEY


const app = express()

app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API key is ${application_key}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

