const mongoose =require('mongoose');

const {Schema}= mongoose;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    fileName: {
        type: String,
        required: true,
    },
    fileData: {
        type: Buffer,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
});

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
    projects: [ProjectSchema],
});

module.exports = mongoose.model('architect',ArchitectSchema);