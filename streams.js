const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1 read the test-file.txt file
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // streams
  //it is used to process data piece by piece(chunks) without completing the whole read or write operation


  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });

  //solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //readableSource.pipe(writableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening....");
});
