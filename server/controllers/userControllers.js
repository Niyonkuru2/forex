import { generateToken } from "../config/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

//sign up new user
export const signup = async(req,res)=>{
    const {fullName,email,password} = req.body;
    try {
        if (!fullName,!email,!password) {
            return res.json({success:false,message:"Missing Details"})
        }
        const user = await User.findOne({email});
        if (user) {
          return res.json({success:false,message:"Account Already Exist"})   
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = User.create({
            fullName,email,password:hashedPassword
        })
        const token = generateToken(newUser._id)
        res.json({success:true,userData:newUser,token,
            message:"User Registered Successfully"
        })
    } catch (error) {
        console.log(error.message);
       res.json({success:false,message:error.message})  
    }
}

//controller function to login user 

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = generateToken(userData._id);

    res.json({
      success: true,
      userData,
      token,
      message: "Login Successful",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

