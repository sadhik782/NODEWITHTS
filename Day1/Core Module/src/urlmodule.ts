import { URL } from "url";


const myUrl = new URL(
  "https://example.com:8080/career?name=John&age=25#section"
);


console.log("Protocol:", myUrl.protocol); 
console.log("Host:", myUrl.host); 
console.log("Pathname:", myUrl.pathname); 
console.log("Search Params:", myUrl.searchParams.get("name")); 
console.log("Hash:", myUrl.hash); 