const express = require('express');
const fs = require('fs')
const Mock = require('mockjs')
const util = require('util')
const app = express();


const dataDes = JSON.parse(fs.readFileSync('./user.json'))



app.get('/*', function (req, res) {
    for(let o of dataDes){
        if(o.url === req.originalUrl ){
            let result = Mock.mock(o.response)
            res.send(result)
        }
    }
});

const server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});