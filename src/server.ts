import * as express from "express";
import {moviesRouter} from "./routes/movieRouter";

const app = express();
app.use(express.json());
app.use('/movies', moviesRouter);

app.get("/", (req, res) => {
    res.send("Hello World!")

});

app.listen(3000, function () {
    console.log('Listening on http://127.0.0.1:3000');
});