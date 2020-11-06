const express       = require('express');
const app           = express();
const cors          = require('cors');
const home          = require('./router/users');

app.use(express.json());
app.use(cors());

// API
app.use('/', (req, res) => {
    res.send('Homepage');
})

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));