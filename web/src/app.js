const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
const static_path = path.join(__dirname,'../public');
require("./db/conn");
const Register = require("./models/regis");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post("/register",async(req,res)=>{
try{
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if(password === cpassword)
    {
        const registerCustomer = new Register({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender,
            password:password,
            confirmpassword:cpassword,
        })
        const registered = await registerCustomer.save();
        res.status(201).send(registered);
        console.log(registered);
        res.status(201).render("index");
    }
    else
    {
        res.status(400).send("passwords are not matching :( ");
    }
}
catch(e){
    res.status(400).send(e);
}
})
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/service",(req,res)=>{
    res.render("service");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(port,console.log("i m listening"));