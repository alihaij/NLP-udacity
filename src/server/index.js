var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");


dotenv.config();

const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';

// You could call it aylienapi, or anything else
var application_key= process.env.API_KEY

console.log(`Your API key is ${application_key}`);


const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/analyzeText', async function (req, res) {
    console.log('entered');
    console.log(req.body);
    const response = await getData(req.body.url);
    res.send(response);
});
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



async function getData(url){
    console.log(`url is ${url}`)
    const form = new FormData();
    form.append("key", process.env.API_KEY);
    form.append("lang", "en");
    form.append("url", url);
    
    const requestOptions = {
      method: 'POST',
      body: form,
     
    };
    
    return await  fetch(apiUrl, requestOptions)
    .then(res =>
        res.json()
    )
    .then(function (res) {
        return {
            
            subjectivity: res.subjectivity,
            text: res.sentence_list[0].text
        }
    });
      
}







