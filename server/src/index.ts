import { PrismaClient } from '@prisma/client'; 
import express from 'express'; // Express web server framework
import cors from 'cors';
import bodyParser from 'body-parser';

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

app.get("/data", async (req, res) => {
});

app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});
