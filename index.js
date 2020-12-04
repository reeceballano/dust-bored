const express       = require('express');
const app           = express();
const cors          = require('cors');
const users         = require('./routes/user');
const helmet        = require('helmet');
const mongoose      = require('mongoose');
const slowDown      = require('express-slow-down');

// CONNECT TO MONGOODB
mongoose.connect('mongodb://localhost:27017/dust-bored',
    {  
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// SLOWS DOWN API REQUEST
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // allow 50 requests per 15 minutes, then...
    delayMs: 1000 // begin adding 1000ms OR 1 second of delay per request above 50:
});
   

app.use(speedLimiter); // SLOWS DOWN ON ALL REQUEST
app.use(express.json());
app.use(cors());
app.use(helmet());

// API
app.use('/api', users);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));