import controller from "../controller/index.js";

//embedding the controllers to a single unit

export default function (app) {
	// User endpoints
	app.post("/user/", controller.insertUser); // insert one sample
	app.get("/user/", controller.getAllUsers); // get all samples
	app.post("/user/login/", controller.loginUser); // insert one sample
	app.get("/user/:id", controller.getOneUser); // get one sample
	app.post("/user/topup/", controller.topupUser); // insert one sample
	// app.put("/user/:id", controller.updateUser); // update one sample
	// app.delete("/user/:id", controller.deleteUser); // delete one sample
	// app.get("/sample/search/:search", controller.searchSamples); // search samples	

	// Travel endpoints
	app.post("/travel/setsource/", controller.insertTravel); // insert one sample
	app.post("/travel/setdestination/", controller.setDestination); // insert one sample
	app.get("/travel/:email", controller.getAllTravels); // insert one sample

	//timetable endpoint
	app.post("/timetable/", controller.insertTimetable); // insert one sample
	app.get("/timetable/", controller.getAllTimetable); // get all samples

}
