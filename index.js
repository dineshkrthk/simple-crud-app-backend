// brain of backend
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//routes
app.use("/api/products", productRoute);

app.get('/',(req,res) =>{
    console.log("get on browser")
   res.send("hello from node api server")
});

// update product
//delete a product 


mongoose.connect("mongodb+srv://lcb2021023:5SdcLwErCqqLBvUg@backenddb.rwkim.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb")
.then(()=>{
    console.log("connected to database!")
    app.listen(3000,()=>{
        console.log('server is running on port 3000')
    });
})
.catch(()=>{
    console.log("connection failed!")
})