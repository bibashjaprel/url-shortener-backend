import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  originalUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Url', urlSchema);
