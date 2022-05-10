const express = require('express');
const app = express();
const port = 3000;
const addrFrom = '0.0.0.0';

app.get("/", (req,res) => {
    res.send("Hi! you finished cicd 실습!")
})
app.listen(port, addrFrom, () => {
    console.log('Broker API is listening on port'+port);
});
