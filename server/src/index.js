const express = require('express');
const dotenv = require('dotenv').config();

const userRoutes = require("./routes/auth.routes")
const messageRoutes = require("./routes/message.routes")


const PORT = process.env.PORT || 4040;;
const app = express();


// moddlewares
app.use(express.json())
// app.use(cors())




// routes

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);






// server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});