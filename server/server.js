import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())

app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");


    res.end(JSON.stringify(req.body, null, 2))
})

app.get('/match', async (req, res) => {
    // This is just mockdata. Can be accessed on http://localhost:5000/match
    const match = [
        {name: 'Final 6', img: 'https://'},
        {name: 'Final 5', img: 'https://'},
        {name: 'Final 4', img: 'https://'},
    ]
    //  todo: GET data from DB
    res.send(match);
});
app.post('/match', async (req, res) => {
    console.log(req.body)
    // todo: Scrape channel
    // todo: Add to DB
    res.send("success");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})