const  express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;
console.log(PORT);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => { console.log("server is running on " + PORT) });