const signUp = async(req , res)=>{
    try {
        res.status(201).json({status:"success" , message:"new user created successfully"})
    } catch (error) {
        res.status(500).json({status:"failed" , message:"user could not be created "})
       
    }
}
module.exports = {signUp}