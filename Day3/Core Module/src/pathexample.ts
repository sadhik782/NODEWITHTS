import * as path from "path"
const filepath=path.join(__dirname,"example.json")
console.log(filepath)
console.log("Extension for this file: ",path.extname(filepath))