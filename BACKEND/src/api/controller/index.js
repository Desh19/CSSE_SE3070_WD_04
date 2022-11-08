//importing implemented functions from user.js
import {
	insertUser,
	getAllUsers,
	loginUser,
	getOneUser,
	topupUser,

	
} from "./user.js";

//importing implemented functions from travel.js

import {
	insertTravel,
	getAllTravels,
	setDestination,
	

	
} from "./travel.js";

//exporting implemented functions

export default {
	
	insertUser,
	getAllUsers,
	loginUser,
	getOneUser,
	topupUser,


	insertTravel,
	getAllTravels,
	setDestination,


};


