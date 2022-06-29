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

app.get("/graphs", ( req, res ) => {
    res.render("graphs.ejs");
});

app.get("/data", async (req, res) => {
    await prisma.$connect();
    const data = await prisma.dataset.findUnique({
        where: {
            id: "629a36276b50cb2f8c950891"
            } 
          });
    await prisma.$disconnect();
    res.json(data);
});

app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});
