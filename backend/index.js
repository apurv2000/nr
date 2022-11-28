const { response } = require('express');
const express=require('express');
const app=express();

app.get('/news/:data',async (req,res)=>{
   const data= req.params.data.split(',');
   const country=data[0];
   const category=data[1];
   const page=data[2];
   const apikey=data[3];
   const pageno=data[4];

    const api_i=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apikey=${apikey}&pageSize=${pageno}`;
const respon=await fetch(api_i);
const js=await respon.json();
console.log(js);

});



app.listen(1000,()=>{
    console.log("harerama");
})