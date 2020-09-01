const mongoose = require('mongoose');
//database connection
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = 'mongodb+srv://songbank:Ece44ecE47kmutNb@cluster0.suzuv.gcp.mongodb.net/test';
mongoose.connect(connectionString, config)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Cannot cennect to MongoDB', err));

module.exports.mongoose = mongoose;