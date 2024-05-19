import Mongoose from 'mongoose';

const sleepSchema = new Mongoose.Schema({
    userId : {
        type : String,
        required : true,
    },
    hours : {
        type : Number,
        required : true
    },
    timestamp : {
        type : String,
        required : true
    }
})

const Sleep = Mongoose.model('Sleep' , sleepSchema);
export default Sleep;