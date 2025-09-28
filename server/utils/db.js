import mongoose from "mongoose";

class MongoDB {
  constructor(uri) {
    this.uri = uri;
    this.connection = null;
  }

   // Connect to MongoDB if not already connected
  async connect() {
    if (this.connection) {
      return this.connection; 
    }

    try {
      this.connection = await mongoose.connect(this.uri, {
      });
      console.log("MongoDB connected!");
      return this.connection;
    } catch (err) {
      console.error("MongoDB connection error:", err.message);
      return null;
    }
  }

  async disconnect() {
    if (!this.connection) return;
    await mongoose.disconnect();
    this.connection = null;
    console.log("MongoDB disconnected!");
  }
}

export default MongoDB;
