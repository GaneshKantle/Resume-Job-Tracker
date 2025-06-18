// === server/routes/job.js ===
import express from 'express';
import Job from '../models/Job.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);
  const data = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = data.id;
  next();
}

router.use(auth);

router.get('/', async (req, res) => {
  const jobs = await Job.find({ userId: req.userId });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const job = new Job({ ...req.body, userId: req.userId });
  await job.save();
  res.status(201).json(job);
});

router.put('/:id', async (req, res) => {
  const job = await Job.findOneAndUpdate({ _id: req.params.id, userId: req.userId }, req.body, { new: true });
  res.json(job);
});

router.delete('/:id', async (req, res) => {
  await Job.deleteOne({ _id: req.params.id, userId: req.userId });
  res.sendStatus(204);
});

export default router;