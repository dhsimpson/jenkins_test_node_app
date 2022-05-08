const express = require('express');
const app = express();
const port = 3000;
const addrFrom = '0.0.0.0';

app.get("/", (req,res) => {
    res.send("hello i'm nodejs app v2!!")
})
app.listen(port, addrFrom, () => {
    console.log('Broker API is listening on port'+port);
});
