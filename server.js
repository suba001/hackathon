const express=require('express')
const cors=require('cors')

const app=express()

const {connectDB}=require('./connection')
const {users}=require('./usermodel')

app.use(express.json())
app.use(cors())



app.post('/insert',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users.create(body);
    res.json(data);
})

app.get('/get',async(req,res)=>{
    const data=await users.find();
    console.log(data);
    res.json(data);
})

app.get('/get/:name',async(req,res)=>{
    //  console.log("sdfc");
     // console.log(req.params);
      const name= req.params.name;
      
      const data=await users.find({hall:name});
          res.json(data);
      })


      app.get('/getbydate/:date',async(req,res)=>{
        //  console.log("sdfc");
         // console.log(req.params);
          const date= req.params.date;
          
          const data=await users.find({date:date});
            res.json(data);
          })

         

app.get('/dis/:pass',async(req,res)=>{
    //  console.log("sdfc");
     // console.log(req.params);
     console.log("hi");
      const pass= req.params.pass;
      
      const data=await users.find({pass:pass});
      console.log(data);
      res.json(data)
      })



app.delete('/delete',async(req,res)=>{
    const name=req.body.name; 
    const pass=req.body.pass;
    const data=await users.deleteMany({name:name,pass:pass})
    res.json(data);
})




app.listen(5500,()=>{
    console.log("server is started at port number 5500");
connectDB()
.then((e)=>{
console.log("mongodb connected")
})
.catch((e)=>{
    console.log("mongodb error occured!!!");

})

})