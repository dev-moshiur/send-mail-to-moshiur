


const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema(
{
appName: {
type: String,
 require: true,
},
email: {
type: String,
 require: true,
},
phone: {
type: String,
 require: true,
},
name: {
type: String,
 require: true,
},
address: {
type: String,
 require: true,
},
message: {
type: String,
 require: true,
},
},
{ timestamps: true }
);
module.exports = mongoose.model('Message',MessageSchema);