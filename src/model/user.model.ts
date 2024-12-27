import mongoose,{Schema} from "mongoose";



const UserSchema=new Schema({
    fullname:{
        type:String,
        required:true,
        minLength:[6,"fullname should be atleast of 6 characters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,"Email must be of 5 characters"]
    },
    date_of_birth:{
        type:Date,
        required:true
    },
    otp:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


const User=mongoose.model("user",UserSchema);
export default User;