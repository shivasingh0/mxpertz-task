const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database');
        console.log(error);
    }
}

module.exports = connectToDb;