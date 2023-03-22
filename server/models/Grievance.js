import { Schema, model } from 'mongoose';

const GrievanceSchema = Schema({
    userId: {
        type:String,  
    },
    title:{
        type: String,
        required:true,
    },
    body:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        enum:['general','department','hostel','canteen'],
        default:'general',
    },
    votes:{
        type:Number,
        default:0,
    },
    comment:{
        type:String,
    },
    status:{
        type:String,
        enum:['approved','waiting'],
        default:'waiting',
    },
    progress:{
        type:String,
        enum:['unsolved','inprogress','solved'],
        default:'unsolved',
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
    department:{
        year:{
            type:Number,
            enum:[1,2,3,4,5], 
        },
        dept:{
            type:String,    
        },
    },
    hostel:{
        block:{
            type:String,   
        },
        floor:{
            type:Number,    
        },
        gender:{
            type:String,   
        },
    }
});

export default model('GrievanceModel', GrievanceSchema);