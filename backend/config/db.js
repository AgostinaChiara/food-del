import mongoose from "mongoose"

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://agosschiara25:6pHzg4QiNqhqrm5l@cluster0.iujldil.mongodb.net/food-del')
    .then(() => console.log("DB Connected"))
}