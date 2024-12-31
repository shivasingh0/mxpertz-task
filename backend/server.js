const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const userRoutes = require('./routes/userRoute');
const appointmentRoutes = require('./routes/appointmentRoute');``

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

// connect to database
connectToDb();

app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Server is running...');
});
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes,);

app.listen(port, () => {
    console.log('Server is running on port 5000');
});