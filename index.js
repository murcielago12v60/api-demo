const express = require('express')
const http = require('http');
const got = require('got');


const app = express()
const port = 3000
const baseUrl = 'http://localhost:40057/healthyco/'

app.use(express.static('public'));
app.use(express.static('node_modules\\jquery\\dist'));
app.use(express.static('node_modules\\jsrsasign\\lib'));
app.use(express.static('node_modules\\base64url\\dist'));
app.use(express.static('node_modules\\js-base64'));
app.use(express.static('node_modules\\dropzone\\dist'));

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/beginUpload', async (req,res) => {
    
    const url = baseUrl + 'beginUpload';

    //return await got(url);
     const response = await got(url);
     res.status(response.statusCode).send(response.body);
})

app.get('/getToken', async (req,res) => {
    
    const url = baseUrl + 'getToken?uploadId='+req.query.uploadId;

    //return await got(url);
     const response = await got(url);
     res.status(response.statusCode).send(response.body);
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))