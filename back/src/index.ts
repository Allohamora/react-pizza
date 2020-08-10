import express from "express";
import path from "path";
import db from "../../front/public/db.json";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const pathToFront = path.join(__dirname, "../../front");

app.use( express.static( path.join(pathToFront, "./build") ) );
app.use( express.json() );

app.get("/pizzas", (req, res) => res.json(db.pizzas));
app.get("*", (req, res) => res.sendFile( path.join(pathToFront, "./build/index.html") ));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));