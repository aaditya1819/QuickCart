const mongoose = require("mongoose");

const uri = "mongodb+srv://aadityadhanwate830_db_user:dOdVUnIGhPrNEK5H@cluster0.6l9ukps.mongodb.net/?appName=Cluster0";

async function testConnection() {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ MongoDB Connected Successfully!");
    const dbs = await mongoose.connection.db.admin().listDatabases();
    console.log("📂 Databases:", dbs.databases.map(db => db.name));
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

testConnection();
