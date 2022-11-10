import mongoose from "mongoose";

//Creating a schema for the timetable

const TimetableSchema = new mongoose.Schema(
  {

    route_no: {
      type: String,
      required:true,
    },
    bus_no: {
      type: String,
      required:true,
    },
    start_location: {
        type: String,
        required:true,    
    },
    end_location: {
      type: String,
      required:true,           
  },
    start_time: {
        type: String,
        required:true, 
    },
    end_time: {
        type: String,
        required:true, 
    },
  },
  { timestamps: true }
);
 



export default mongoose.model('timetable',TimetableSchema);