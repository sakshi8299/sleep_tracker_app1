import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import sleepRouter from './routers/sleepRouter.js';

// connection to mongoDB
async function main(){
    await mongoose.connect(config.MONGODB_URL);
}
main().catch(err => console.log(err));
main().then(() => {
    console.log("Connected to mongodb database");
})
// connection to mongoDB

const app = express();
app.use(express.json());

app.use('/sleep' , sleepRouter);

export default app;