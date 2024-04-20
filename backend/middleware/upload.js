// const path = require('path');
// const multer=require('multer');

// var storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'uploads/')
//     },
//     filename: function(req,file,cb){
//         let ext=path.extname(file.originalname)
//         cb(null,Date.now()+ext)
//     }
// })

// var upload = multer({
//     storage:storage,
//     fileFilter:function(req,file,callback){
//         if(
//             file.mimetype == 'image/png'||
//             file.mimetype == 'image/jpg'
//         ){
//             callback(null,true)
//         }else{
//             console.log("only jpg and png")
//             callback(null,false)
//         }
//     },
//     limits:{
//         fileSize: 1024*1024*2
//     }
// })


// module.exports=upload


const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'deaiad2xb',
  api_key: '513636586373987',
  api_secret: 'c4sjnEAqoC8-OtqNa4moDmj13F8'
});

// Define the upload function
const upload = multer({
  storage: multer.diskStorage({}), // We don't need disk storage as we are uploading to Cloudinary
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('Only jpg and png files are allowed'), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2 // Limit file size to 2MB
  }
});

// // Middleware function to handle the file upload
// function handleFileUpload(req, res, next) {
//   upload(req, res, function (err) {
//     if (err) {
//       return res.status(400).json({ error: err.message });
//     }
//     // If file upload is successful, upload the file to Cloudinary
//     cloudinary.uploader.upload(req.file.path, { folder: 'avatars/' }, function (err, result) {
//       if (err) {
//         return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
//       }
//       // Once the file is uploaded to Cloudinary, you can access the URL from the result object
//       req.avatarUrl = result.secure_url; // Store the URL in the request object
//       next();
//     });
//   });
// }

module.exports = upload;




