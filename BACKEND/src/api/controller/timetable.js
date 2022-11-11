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

// delete one time table data

export const deletetimetable = async (req, res) => {
    const id = req.params.id;
    await TimetableService.deletetimetable(id).then(()=>{
        res.status(200).send({status:"Item deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with deleting item"})
    })    
}



export const updateTimetable = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const {route_no, bus_no, start_location, end_location, start_time, end_time}=req.body;

    const updateItem={
        route_no, bus_no, start_location, end_location, start_time, end_time
    }
    const update = await timetable.findByIdAndUpdate(id,updateItem).then (async()=>{
        res.status(200).send({status: "Item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
    console.log(update);
}


// Get one timetable

export const getOneTimetable = async (request, response, next) => {
	await TimetableService.getOneTimetable(request.params.id)
		.then(async (data) => {
			response.status(200).send({status:"Success",data:data})
			next();
		})
		.catch((error) => {
			response.status(500).send({status:"Error"});
			next();
		});
};