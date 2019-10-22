//  console.log("PROCESS:", process);
// console.log("hello this is node js");
// const {mul,add,min,div} =require("./helpers")
// const tot =mul(10,100);
// const to =add(100,100);
// const t =min(15,5);
// const o =div(15,5);
// console.log(tot);
// console.log(to);
// console.log(t);
// console.log(o);
// console.log("Hello node js");
const http= require("http");

const server= http.createServer((req,res)=>{

  res.end("Hey from node js server");
});

server.listen(3000);

