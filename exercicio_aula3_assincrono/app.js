const express = require("express");
const app = express();
const routeUsers = require("./routes/routeUsers");

app.use(express.json());
app.use("/api", routeUsers);


app.listen(3000, () => {
    console.log("Servidor rodando");
});
