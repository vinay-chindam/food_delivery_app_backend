import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vinaychindam1728:st0EhLHqxbrkkSFO@cluster0.kzljt05.mongodb.net/food-del2').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.