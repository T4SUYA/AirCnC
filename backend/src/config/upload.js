const multer = require('multer');
var path = require('path');
module.exports = {
    storage: multer.diskStorage({
        destination:path.resolve(__dirname,'..','..','uploads'),
        filename: (req,file,cb) =>{
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext);
            cb(null, `${Date.now()}_${name}${ext}`);
        }
    })

}