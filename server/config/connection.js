import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mindGjm',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
