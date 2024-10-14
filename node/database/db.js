import mongoose from "mongoose";
const url = "mongodb://localhost:27017/db_mern";
mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Success ✨:");
});
db.on("error", () => {
  console.log("connection error🙅🏻‍♀️");
});

export default mongoose;
