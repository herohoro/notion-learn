const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5050;
require("dotenv").config();

//JSONオブジェクトとして使うって宣言
app.use(express.json());
// localhost:5050/api/v1/第二引数に指定したパス
app.use("/api/v1", require("./src/v1/routes/auth"));

//DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DB接続中");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中・・・・");
});
