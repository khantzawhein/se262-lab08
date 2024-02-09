const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});


app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
}) 

app.post('/', function (req, res) {
    let height = req.body.height;
    let weight = req.body.weight;
    let bmi = weight / Math.pow(height, 2);

    res.send(`The result of the BMI calculation is ${bmi}`);
})