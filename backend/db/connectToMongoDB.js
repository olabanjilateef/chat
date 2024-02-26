import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://chatapp:chatapp@cluster0.nwx7a3e.mongodb.net/");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;