// import the file system module (require("fs"))
const fs = require("fs")

// ASYNCHRONOUSLY

// readFile()
fs.readFile("./files/joe.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error)
    }else {console.log(data)}
})

// writeFile()
// const mayor = "Mayowa is a backend developer"
// fs.writeFile("./files/amaka.txt", mayor, () => {
//     console.log("data entered successfully")
// })


// SYCHRONOUSLY
// readFileSync()
// const content = fs.readFileSync("./files/monday.txt", "utf-8" )

// console.log(content)

// writeFileSync()
// const content2 = "Jagaban"
// fs.writeFileSync("./files/joe.txt", content2)

// a file will be created for you
// const node = "A JS routine environment built on google chrome V8 engine that is open source"
// fs.writeFileSync("./files/node.txt", node)