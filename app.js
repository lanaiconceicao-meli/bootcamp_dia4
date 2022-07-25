const express = require("express");
const app = express();
const routeProducts = require("./routes/routeProducts");

app.use(express.json());
app.use("/api", routeProducts);


app.listen(3000, () => {
    console.log("Servidor rodando");
});