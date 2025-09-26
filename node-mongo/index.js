const mongoose = require('mongoose');
// let url='http://localhost:8080/users ';

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}); 



const User = mongoose.model('User', userSchema);

const user1=new User({
    name:"rahul",
    email:"rahul@gmail.com",
    age:19,
    });

connectToDatabase();