import mongoose, { ConnectOptions } from 'mongoose';

const uri: string = process.env.MONGODB_URI || '';

// const options: ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// };

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) => console.log(`MongoDB connection error: ${err}`));

export default mongoose.connection;
