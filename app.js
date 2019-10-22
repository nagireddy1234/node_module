// const {mul,add,min,div} =require("./helpers")
// const tot =mul(10,100);
// const to =add(100,100);
// const t =min(15,5);
// const o =div(15,5);
// console.log(tot);
// console.log(to);
// console.log(t);
// console.log(o);
// const http= require("http");
// const server= http.createServer((req,res)=>{
//   res.end("heyyyy from node js server");
// });
// server.listen(3000);

// const express=require("express");
// const app= express();
// app.get("/", (req,res)=>{
//   res.send("hey whats up from express");
// });
// app.listen(5000);

const fs= require("fs");
const filename="target.txt";

fs.readFile(filename,(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());
});
console.log("it's asynchronus programming  ")
