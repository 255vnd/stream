const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io =  require("socket.io")(server);
server.listen(3000, () => console.log("Server started!"));

app.get("/", (req, res) => res.render("home"));