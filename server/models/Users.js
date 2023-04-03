import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type:String,
    },
    name:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','faculty','admin'],
    }
});

export default model("User", UserSchema);