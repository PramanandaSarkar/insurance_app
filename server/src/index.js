const express = require('express');
const dotenv = require('dotenv').config();


const PORT = process.env.PORT || 4041;;
const app = express();


// moddlewares




// routes







// server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});