import { getAst } from "./Lib/createCode";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("src", "web")));

app.post("/api/generate", (req, res) => {
  try {
    const result = getAst(req.body);
    return res.json({ body: result });
  } catch (e) {
    console.error(e);
    return res.json({ body: "ERROR" });
  }
});

app.listen(3000, () => {
  console.log("start express server...");
});