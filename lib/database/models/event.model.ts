import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string,
    title: string;
    description?: string;
    location?: string;
    createdAt?: string;
    imageUrl: string;
    startDateTime?: string;
    endDateTime?: string;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?: {_id:string, name:string}
    organizer?: {_id:string, firstName:string, lastName: string}
}

const EventSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String},
    location: {type:String},
    createdAt: {type:String, default:Date.now},
    imageUrl: {type:String, required:true},
    startDateTime: {type:String, default:Date.now},
    endDateTime: {type:String, default:Date.now},
    price: {type:String},
    isFree: {type:Boolean, defaul:false},
    url: {type:String},
    category: {type:Schema.Types.ObjectId, ref:'category'},
    organizer: {type:Schema.Types.ObjectId, ref:'user'},
})


const Event = models.Event || model('Event', EventSchema);

export default Event