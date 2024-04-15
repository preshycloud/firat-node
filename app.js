const http = require("http")
const port = 9009
const fs = require("fs")


// storing pages in a variable
const homePage = fs.readFileSync("./pages/index.html")
const aboutPage = fs.readFileSync("./pages/about.html")
const videosPage = fs.readFileSync("./pages/videos.html")
const contactPage = fs.readFileSync("./pages/contact.html")
const errorPage = fs.readFileSync("./pages/error.html")

// create server
const server = http.createServer((request, response) => {
    // response.end("Hi Hi, welcome to my youtube channel")
    let path = request.url
    if(path === "/" || path === "/home"){
        response.end(homePage)
    } else if(path === "/about"){
        response.end(aboutPage)
    } else if(path === "/contact"){
        response.end(contactPage)
    } else if(path === "/videos"){
        response.end(videosPage)
    } else{
        response.end(errorPage)
    }
})

// start the server
server.listen(port, () => {
    console.log("Go to the localhost!!!")
})


