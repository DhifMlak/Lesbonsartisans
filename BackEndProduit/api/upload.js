const express = require('express');
const paath = require('path');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        cb(null, getFileName(file.originalname,file.originalname, 0))
    }
})

function getFileName(original,fileName, i) {
    const path = `./uploads/`;
    if (fs.existsSync(`${path}${fileName}`)) {
            fileName = original;
            let splited = fileName.split('.');
            splited[splited.length-2]+=`(${i + 1})`;
            return getFileName(`${original}`,`${splited.join('.')}`, i+1);
    }
    else return  fileName;

}

const upload = multer({ storage })

router.post('/upload', upload.single('file'), function (req, res) {
    console.log(req.filez);
     res.status(200).send({"message":"done"})
})


module.exports = router;