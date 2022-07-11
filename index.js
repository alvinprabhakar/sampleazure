let express = require("express");

let app = express();
let port = 3001;

const PORT = process.env.PORT || port;

app.get("/", (req, res) => {
  res.json({ msg: "welcome to my store!!!!!!!!" });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
