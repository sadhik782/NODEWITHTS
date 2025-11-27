import * as fs from "fs"
fs.writeFileSync("example.txt","This is a test msg")
fs.readFileSync("example.txt")
console.log(fs.readFileSync("example.txt").toString())
console.log(fs.readFileSync("example.txt".toString()))