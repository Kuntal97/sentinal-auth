import mongoose from "mongoose";
export const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://kuntalpanchal97_db_user:t6fZwWHDfmfLAvuT@venus.40rjsga.mongodb.net/"
		);
	} catch (error) {
		console.log("MongoDB connection failed: ", error.message);
		process.exit(1);
	}
};
