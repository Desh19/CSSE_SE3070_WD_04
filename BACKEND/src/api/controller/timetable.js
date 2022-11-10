import TimetableService from "../service/index.js";
import  Joi from 'joi';
import timetable from "../models/timetable.js";
import jwt from 'jsonwebtoken';


// Insert one timetable
export const insertTimetable = async (request, response, next) => {

	await TimetableService.insertTimetable(request.body)
		.then((data) => {
			// request.handleResponse.successRespond(response)(data);
			response.status(200).send({status:"Success",data:data})
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"})
			next();
		});
	
};


// Get all timetable

export const getAllTimetable = async (request, response, next) => {
	await TimetableService.getAllTimetable(request.params)
		.then(async (data) => {
			// response.status(200).send({status:"Success",data:data})
			response.json(data)
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"});
			next();
		});
};