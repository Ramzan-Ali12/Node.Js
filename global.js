// global object
// console.log(global)
setTimeout(()=>{
    console.log("In the timeout");
    clearInterval(int);
},3000);

const int =setInterval(()=>{
    console.log("Int the time Interval");
},1000);

//get the file name and directiry name
console.log(__dirname);
console.log(__filename);

//no access to DOM object
console.log(document.querySelector);