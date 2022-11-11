import timetableModel from "../models/timetable.js";

// Insert one time table
export const insertTimetable = async (timetableData) => {
	

	return await timetableModel.create(timetableData)
		.then(async (timetable) => {
			await timetable.save();
			return timetable;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all timetable
export const getAllTimetable = async () => {
	return await timetableModel.find({})
		.then((timetable) => {
			return timetable;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete one timetable data

export const deletetimetable = async (id) => {
	return await timetableModel.findByIdAndDelete(id)
		.then((timetable) => {
			return timetable;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one timetable

export const getOneTimetable = async (id) => {
	return await timetableModel.findById(id)
		.then((timetable) => {
			return timetable;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

