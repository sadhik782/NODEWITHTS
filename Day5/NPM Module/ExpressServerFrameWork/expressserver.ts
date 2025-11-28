import express from "express";
import type { Request, Response } from "express";
const PORT_NO = 8001;
const serverObj = express();
serverObj.get("/", (req: Request, res: Response) => {
  res.send("Hello world from express server");
});
serverObj.listen(PORT_NO, () => {
  console.log("server started");
});
