import { PrismaClient } from '@prisma/client'; 
import express from 'express'; // Express web server framework
import cors from 'cors';
import bodyParser from 'body-parser';

import * as api from "./controllers/main.contoller"

const app = express();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8087;

// Get routes
app.get("/", ( req, res ) => {
    res.render("index");
});

app.get("/data", api.data);

app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});
