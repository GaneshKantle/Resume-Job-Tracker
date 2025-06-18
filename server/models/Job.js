// === server/models/Job.js ===
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: String,
  role: String,
  status: { type: String, enum: ['Applied', 'Interviewing', 'Offered', 'Rejected'], default: 'Applied' },
  resumeUrl: String,
});

export default mongoose.model('Job', jobSchema);