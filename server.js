import express from "express";
import mongoose from "mongoose";
import {  urlShort , getOriginalUrl } from "./Controller/Era.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.urlencoded({ extended: true }));

// MongoDB local connection (MongoDB Compass)
mongoose.connect("mongodb://127.0.0.1:27017/nodeJsExpressApi")
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log(error));

  app.get("/",(req,res)=>{
    res.render("Rama",{shortUrl:null});
  })
  
  // handle url submission 
  app.post('/shorten', urlShort);

  // redirect to original url
  app.get('/:shortCode', getOriginalUrl)



const Port = 4001;
app.listen(Port,()=> console.log(`server is running on port ${Port}`));