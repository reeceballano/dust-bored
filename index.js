const express       = require('express');
const app           = express();
const cors          = require('cors');
const users         = require('./routes/user');
const helmet        = require('helmet');
const mongoose      = require('mongoose');
const rateLimit     = require('express-rate-limit');

// CONNECT TO MONGOODB
mongoose.connect('mongodb://localhost:27017/dust-bored',
    {  
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(cors());
app.use(helmet());

// API
app.use('/api', users);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));