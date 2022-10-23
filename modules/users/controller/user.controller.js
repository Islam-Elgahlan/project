const User = require("../model/user.model");

// let arr = [{id:1 , name:"ahmed" , age:25}];

const getAllUsers = async(req,res)=>{
    const users = await User.find({})
    res.json({message:"Allusers" , data:users});
}


const addNewUser = async (req,res)=>{
    let {name,email,password,age} = req.body;
    try {
        await User.insertMany({name,email,password ,age});
        res.json({message:"registered"})
    } catch (error) {
        res.json({message:"error", data:error})
    }
   
}
module.exports ={
    getAllUsers,
    addNewUser
};
