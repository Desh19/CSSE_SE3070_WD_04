import travelModel from "../models/travel.js";
import sessionModel from "../models/session.js";
import distanceModel from "../models/distance.js";
import userModel from "../models/user.js";

// Insert travel details
export const insertTravel = async (userData) => {
    
	return await travelModel.create(userData)
		.then(async (travel) => {
			await travel.save()
			
				const newSession = new sessionModel({
               
					id:travel._id,
					passenger_email:travel.passenger_email
					
			})
	
			newSession.save()
           

			
			return travel;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all travel details
export const getAllTravels = async (email) => {
	return await travelModel.find({passenger_email:email})
		.then((travel) => {
			return travel;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Insert Destination
export const setDestination = async (userData) => {
	
	const session = await sessionModel.find({passenger_email:userData.passenger_email})
	
	const travel = await travelModel.findById(session[0].id);
	const distance = await distanceModel.findOne({source:travel.source,destination:userData.destination});
	const user = await userModel.findOne({email_address:userData.passenger_email});
	
	
	const total = parseInt(distance.distance) * parseInt(distance.unitprice);
	const totalcredit = parseInt(user.credit_amount) - parseInt(total);
	
	await userModel.findByIdAndUpdate(user._id,{credit_amount:totalcredit});
	// console.log(travel[0]);

	userData.amount = total;
	
	return await travelModel.findByIdAndUpdate(session[0].id, userData, {
		new: true,
	})
		.then(async(travel) => {
			await sessionModel.findByIdAndDelete(session[0]._id);
			if (travel) {
				return travel;
			} else {
				throw new Error("Travel not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
		
};
