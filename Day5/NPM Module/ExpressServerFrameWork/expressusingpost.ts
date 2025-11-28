import express from "express";
import type { Request, Response } from "express";
const appServer = express();
appServer.use(express.json());
appServer.post("/placeorder", (req: Request, res: Response) => {
  const { customerName, phoneNumber } = req.body;
  res.status(200).send(
    `Received your request ${customerName}. You will receive your order soon`
  );
});
appServer.listen(3001, () => {
  console.log("server is running");
});
/*
 {
  "customerName": "Ritika",
  "phoneNumber": "9876543210",
  "address": "123, Food Street, Flavor Town",
  "items": [
    { "itemId": "201", "name": "Paneer Pizza", "quantity": 2 },
    { "itemId": "205", "name": "Cold Coffee", "quantity": 1 }
  ]
}
  additional information
  */
