"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCode_1 = require("./Lib/createCode");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("src", "web")));
app.post("/api/generate", (req, res) => {
    try {
        const result = (0, createCode_1.getAst)(req.body);
        return res.json({ body: result });
    }
    catch (e) {
        console.error(e);
        return res.json({ body: "ERROR" });
    }
});
app.listen(3000, () => {
    console.log("start express server...");
});
