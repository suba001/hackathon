const mongoose=require('mongoose')

const usermodel=new mongoose.Schema({
    hall:String,
    name:String,
    dept:String,
    seats:String,
    func:String,
    date:String,
    time:String,
    etime:String,
    pass:String,
    cp:String,
    mob:String,
    hodmob:String
   
})


exports.users=mongoose.model("booking",usermodel,"booking");