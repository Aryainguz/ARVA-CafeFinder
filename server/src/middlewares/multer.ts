import multer from 'multer';
import path from 'path';
import { Request } from 'express';

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req: Request, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
  fileFilter: (req: Request, file, cb) => {
    checkFileType(file, cb);
  },
}).single('image'); // The field name should be 'image'

function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Images only!'));
  }
}

export default upload;
