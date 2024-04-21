const mongoose =require('mongoose');

const {Schema}= mongoose;
const ArchitectSchema = new Schema({
    name:{
        type : String,
        required : true,
    },
    location:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    experience:{
        type: String,
        required:true,
    },
    avatar: {
        type: String,
    },
    projectName:{
        type: String,
    },
    education:{
        type: String,
    },
    awards:{
        type: String
    },
    projectLink:{
        type: String
    }
});

module.exports = mongoose.model('architect',ArchitectSchema);