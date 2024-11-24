const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb+srv://abhishekmishra342001:Abhi2001@abhishek.9kvuy.mongodb.net/?retryWrites=true&w=majority&appName=Abhishek'

const app = express();
app.use(express.json());

mongoose.connect(url)
.then(()=>{
    console.log('Database is connect to server');
})
.catch((error)=>{
    console.log(error)
})

// route

app.post('/apitest', (req,res)=>{
    try{
        let data = req.body;
        console.log(data)
        res.status(200).json({massege:'sucess api test ...', data})
    }
    catch(error){
            res.status(500).json({massgeg:error})
    }
})


app.listen(2001 , ()=>{
    console.log('server is running on Port 2001');
})