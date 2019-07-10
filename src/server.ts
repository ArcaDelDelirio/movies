import * as express from "express";
import {auth} from "./middlewares/auth";
import {moviesRouter} from "./routes/movieRouter";
import {authRouter} from "./routes/auth";


const app = express();
app.use(express.json());
//Middleware
app.use(auth);
app.use('/login', authRouter);
app.use('/movies', moviesRouter);

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(3000, function () {
    console.log('Listening on http://127.0.0.1:3000');
});