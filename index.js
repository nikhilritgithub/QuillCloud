const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//use for linking css file and vanila JS.
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files});
    })
})

app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show',{filename: req.params.filename, filedata: filedata});
    })
})

app.get('/edit/:filename',function(req, res){
   res.render('edit',{filename: req.params.filename});
})

app.post('/edit', function(req, res){
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`, function(err){
        res.redirect("/");
    });
 })


app.post("/edit-userName", function(req ,res){
    fs.update(`/files/${req.body.existing}`,`/files/${req..body.new}`, function(err)){
        res.redirect("/created");
    }
})
app.use("new-route", function(req, res){
    fs.writeFile(`/files/${req.body.existing}`,`files/${req.body.new}, function(err)`)
    res.send(register);
})

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt`, req.body.details, function(err){
        res.redirect("/");
    });
})

app.post("/registered-user", function(req, res){
    fs.ReadFile(`./files/new/`, req.body.details, function(err){
        res.redirect("/created");
    })
})

app.listen(3000);
