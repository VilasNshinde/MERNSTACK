import User from "../model/userModel.js";
import mongoose from "mongoose";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exits." });
    }
    const saveData = await newUser.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    let UserData = await User.find();
    if (!UserData || UserData === 0) {
      return res.status(404).json({ message: "user data not foun" });
    }
    res.status(200).json(UserData);
  } catch {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const userExit = await User.findById(id);

    if (!userExit) {
      return res.status(404).json({ message: "user data not foun" });
    }
    res.status(200).json(userExit);
  } catch {
    res.status(500).json({ errorMessage: error.message });
  }
};

// export const Update = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const userExit = await User.findById(id);

//     if (!userExit) {
//       return res.status(404).json({ message: "user data not found" });
//     }
//     const updatedData = await User.findByIdAndUpdate(id, req.body, {
//       new: true,
     
//     });
        
//     res.status(200).json(updatedData);

//   } catch (error) {
//     res.status(500).json({
//       errorMessage: error.message
//     });
//   }
  // };

export const Update = async (req, res) => {
  try {
    const id = req.params.id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updatedData = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};




export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id.trim();

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
