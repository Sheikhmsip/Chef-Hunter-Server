const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const chefs = require('./data/chef.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send('chef-hunter is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})


app.listen(port, () => {
    console.log(`chef API ins running on : ${port}`)
})