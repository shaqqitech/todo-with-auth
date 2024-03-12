import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      "Connection established successfully";
    });

    connection.on("error", (e) => {
      console.log("Connection not established", e);
    });
  } catch (error) {
    console.log("Error connecting to Mongoose", error);
  }
}
