import express, { Request, Response } from "express";
import pool from "./dbconnection";
import { FoodItem } from "./FoodItem";
//import { it } from "node:test";


let appServer = express();
//handling routes => getFoodMenu from db
appServer.get("/getFoodMenu", (req: Request, res: Response) => {
  let responseData: string =
    "<HTML><HEAD><TITLE>Food Delivery app</TITLE></HEAD><BODY><table>";
  pool
    .query("Select * from food_items")   //then () catch() finally() select id,name,price,category from food_items
    .then(([result]) => {
      let menuItem: FoodItem[] = result as FoodItem[];
      responseData +=
        "<THEAD><TH>ID</TH><TH>Name</TH><TH>Price</TH><TH>Category</TH></THEAD>";
      menuItem.forEach((item) => {
        responseData += `<TR> <TD>${item.id}</TD><TD>${item.name}</TD><TD>${item.price}</TD><TD>${item.category} </TD></TR>`;
      });
      responseData += "</TABLE></BODY></HTML>";
      res.send(responseData);
    })
    .catch((err) => {
      console.log("Error", err);
    })
    .finally(() => {
      console.log("db end");
    });
});
appServer.listen(3000, () => {
  console.log("server running");
});
