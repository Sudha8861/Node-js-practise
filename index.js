const fs = require("fs");
const http = require("http");
const url = require("url"); //routing

////////////////////////////////
//Files

//Blocking syncronous way
// const textIn = fs.readFileSync("./text/input.txt", "utf-8");
// console.log(textIn);
// const hello = "Hello World";
// console.log(hello);

// const textOut = `This is what you know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./text/output.txt", textOut);
// console.log("file written!");

//Non-Blocking Asyncronous way
// fs.readFile("./text/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error! ⭐  ");
//   fs.readFile(`./text/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./text/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./text/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your file has been written");
//       });
//     });
//   });
// });
// console.log("will read file!");

//////////////////////////////
//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is a PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { "content-type": "application/json" }); //write a json data in the browser
      //   console.log(productData);
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
