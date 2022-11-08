
import mongoose from "mongoose";

//Creating a schema for the distance

const DistanceSchema = new mongoose.Schema(
  {

    source: {
      type: String,
      required:true,
    },
    destination: {
      type: String,
      required:true,
    },
    distance: {
        type: Number,
        required:true,
      },
    unitprice: {
        type: Number,
        required:true,
      },

    
  },
  { timestamps: true }
);
 

export default mongoose.model('distance',DistanceSchema);