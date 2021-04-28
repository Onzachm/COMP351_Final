const mysql = require("mysql");
const express = require("express");
const exp = express();
const endPoint = "/COMP351/group/API/v1"


const db = mysql.createConnection({
    host: "localhost",
    user: "greymert_nodemysql",
    password: "germanrt_nodemysql",
    database: "greymert_nodemysql"
});

exp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization, Content-Length, X-Request-Width");
    next();
});

exp.put(endPoint, (req, res) => {


    let body = "";
    req.on('data', function (chunk) {
        if (chunk !== null) {
            body += chunk;
        }
    });

    req.on('end', function () {
        let parsedBody = JSON.parse(body);
        let index = parsedBody.id;
        let quote = parsedBody.body;
        db.query("REPLACE INTO `group`(`id`, `quote`) VALUES (" + index + ',' + quote + ')', function (err, result) {
            if (err) throw err;
        });
    });
    db.query("INSERT INTO `calls`(callname) VALUES ('PUT') ", function (err, result) {
        if (err) throw err;
        res.send(result);
    });

});

exp.post(endPoint, (req, res) => {
    let body = "";
    req.on('data', function (chunk) {
        if (chunk !== null) {
            body += chunk;
        }
    });

    req.on('end', function () {
        let parsedBody = JSON.parse(body);
        let index = parsedBody.id;
        let quote = parsedBody.body;
        db.query("INSERT INTO `group`(`id`, `quote`) VALUES (" + index + ',' + quote + ')', function (err, result) {
            if (err) throw err;
        });
    });
    db.query("INSERT INTO `calls`(callname) VALUES ('POST') ", function (err, result) {
        if (err) throw err;
        res.send(result);
    });

});

exp.delete(endPoint, (req, res) => {
    let body = "";
    req.on('data', function (chunk) {
        if (chunk !== null) {
            body += chunk;
        }
    });

    req.on('end', function () {
        let parsedBody = JSON.parse(body);
        let index = parsedBody.id;
        let quote = parsedBody.body;

        db.query("DELETE FROM `group` WHERE ( id = " + index + ')', function (err, result) {
            if (err) throw err;
        });
    });
    db.query("INSERT INTO `calls`(callname) VALUES ('DELETE') ", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

exp.get(endPoint, (req, res) => {
    db.query("SELECT * FROM `group`", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
    db.query("INSERT INTO `calls`(callname) VALUES ('GET') ", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

exp.get(endPoint + "/1", (req, res) => {
    db.query("SELECT count(*) FROM calls WHERE callname = 'PUT'", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

exp.get(endPoint + "/2", (req, res) => {
    db.query("SELECT count(*) FROM calls WHERE callname = 'GET'", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

exp.get(endPoint + "/3", (req, res) => {
    db.query("SELECT count(*) FROM calls WHERE callname = 'POST'", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

exp.get(endPoint + "/4", (req, res) => {
    db.query("SELECT count(*) FROM calls WHERE callname = 'DELETE'", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

exp.listen();