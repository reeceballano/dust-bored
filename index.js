const express       = require('express');
const app           = express();
const cors          = require('cors');
const users          = require('./routes/user');

app.use(express.json());
app.use(cors());

// API
app.use('/api', users);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));