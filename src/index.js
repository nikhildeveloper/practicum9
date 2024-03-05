const express = require("express");
const cors = require('cors');
const app = express();
const port = 3828;
const {add} = require("./arithmetica")

// Serve static files from 'public' directory
app.use(express.static('public'));
app.use(cors());



// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

