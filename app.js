const express = require('express');
const Mock = require('mockjs')
const util = require('util')
const app = express();
const fs = require('fs')


var dataDes = JSON.parse(fs.readFileSync('./user.json'))



fs.watch('./user.json', (eventType, filename) => {
    console.log(`事件类型是: ${eventType}`);
    if (filename) {
        console.log(`提供的文件名: ${filename}`);
        dataDes = JSON.parse(fs.readFileSync('./user.json'))
    } else {
        console.log('未提供文件名');
    }
});

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