import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    default: '',
  },
  company: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  accountType: {
    type: String,
    enum: ['individual', 'business'],
    default: 'individual',
  },
  agreeToTerms: {
    type: Boolean,
    required: [true, 'You must agree to the terms and conditions'],
  },
  subscribeNewsletter: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
