import fs from "fs";
fs.readFile("./books.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("OK: " + filename);
  console.log(data);
});
