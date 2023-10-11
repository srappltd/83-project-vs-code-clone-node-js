const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const pubPath = path.join(__dirname, 'public');
const uploadPath = path.join(__dirname, 'upload');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(pubPath))
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    fs.readdir(uploadPath,{withFileTypes:true},(err,data)=>{
        fs.readFile(`${uploadPath}/${req.query.file}`,(error,text)=>{
            console.log(text.toString());
            res.render('index',{data,text});
        })
    })
})
app.get('/file',(req,res)=>{
    fs.writeFile(`${uploadPath}/${req.query.file}`,`${req.query.file}`,(error)=>{
        if(!error){
            console.log("File created successfully");
            res.redirect('/')
        }else{
            console.log("File not created successfully");
            res.redirect('/')
        }
    })
})
app.get('/folder',(req,res)=>{
    fs.mkdir(`${uploadPath}/${req.query.folder}`,(error)=>{
        if(!error){
            console.log("Folder created successfully");
            res.redirect('/');
        }else{
            console.log("Folder not created successfully");
            res.redirect('/');
        }
    })
})

app.get('/delete/:type/:filename',(req,res)=>{
    if(req.params.type === 'folder'){
        fs.rmdir(`${uploadPath}/${req.params.filename}`,(error)=>{
            res.redirect('/');
        })
    }else{
        fs.unlink(`${uploadPath}/${req.params.filename}`,(error)=>{
            res.redirect('/');
        })
    }
})
app.get('/update/:type/:filename',(req,res)=>{
    if(req.params.type === 'folder'){
        fs.rename(`${uploadPath}/${req.params.filename}`,`${uploadPath}/${req.query.update}`,(error)=>{
            if(!error){
                console.log('Rename folder Successfully')
                res.redirect('/')
            }
        })
    }else{
        fs.rename(`${uploadPath}/${req.params.filename}`,`${uploadPath}/${req.query.update}`,(error)=>{
            if(!error){
                console.log('Rename folder Successfully')
                res.redirect('/')
            }
        })
    }
})


app.listen(port,()=>{
    console.log('listening on port http://localhost:3000')
})