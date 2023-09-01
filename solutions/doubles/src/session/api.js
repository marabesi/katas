const express = require('express');
const app = express();
const port = 4242;
app.get('/*', (req, res) => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    res.json({ position: x + ':' + y });
});
app.listen(port, () => console.log(`Hello world, app is listening on port ${port}!`))
