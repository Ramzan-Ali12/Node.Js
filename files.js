const fs = require('fs');

// Reading the file
fs.readFile('./docs/my.txt', (err, data) => {
    if (err) throw err;
    else {
    console.log(data.toString());
  }
});

// Writing the file
fs.writeFile('./docs/my.txt', 'Node.Js is a Popular runtime Javascript', (err) => {
    if (err) throw err;
    else {
    console.log('Writing file successfully');
  }
});

// directories
if (!fs.existsSync('./assets'))
{
fs.mkdir('./assets',(err)=>{
    if (err) throw err;

    console.log("Folder Created Successfuly!..")
});
}
else{
    fs.rmdir('./assets',(err)=>{
    if (err) throw err;

console.log("Folder Deleted Successfully!..")
    })
}
//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if (err) throw err;
        console.log("File Deleted Successfuly!..")
    });
}