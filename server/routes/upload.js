// === server/routes/upload.js ===
import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post('/upload', upload.single('resume'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

export default router;