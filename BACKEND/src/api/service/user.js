import userModel from "../models/user.js";
import QRCode, { toDataURL } from 'qrcode'

// Insert one user
export const insertUser = async (userData) => {
	
   userData.qrcode = await QRCode.toDataURL(userData.email_address);
   userData.credit_amount = 1000

	return await userModel.create(userData)
		.then(async (user) => {
			await user.save();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all users
export const getAllUsers = async () => {
	return await userModel.find({})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one user
export const getOneUser = async (id) => {
	return await userModel.findById(id)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// login user
export const loginUser = async (userData) => {
	return await userModel.find({email_address:userData.email_address,password:userData.password})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};


// topup user
export const topupUser = async (userData) => {
	const user = await userModel.findById(userData.id)
    const total = parseInt(user.credit_amount )+ parseInt(userData.amount);
	const data  = {
		credit_amount:total

	}
	
	return await userModel.findByIdAndUpdate(userData.id, data, {
		new: true,
	})
		.then(async(user) => {
	
			if (user) {
				return user;
			} else {
				throw new Error("User not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};



