const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bewar_db",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("connection built successfully");
}).catch((e)=>{
    console.log("connection fail");
})