import mongoose from "mongoose";

//Creating a schema for the session

const SessionSchema = new mongoose.Schema(
  {

    id: {
      type: String,
      required:true,
    },
    passenger_email: {
      type: String,
      required:true,
      unique:true
    },
    
  },
  { timestamps: true }
);
 

export default mongoose.model('session',SessionSchema);