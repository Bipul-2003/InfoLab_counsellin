
const mongoose = require('mongoose');
function DbConnect() {
    console.log('coming here...', process.env.DB_URI);
    const DB_URI = process.env.DB_URI;
    // Database connection
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;