import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
const items = [];

app.get("/",(req,res)=>{
    res.render("index.ejs",{ items });
});
app.post("/submit",(req,res)=>{
    const target=req.body["newItem"];
    items.push(target);
    res.render("index.ejs", { items });
});

app.listen(3000,()=>{
    console.log(`Server is running at port ${port}`);
});




