var mongoose = require('mongoose');

var OTPSchema = mongoose.Schema({
    otp: { type: Number },
    mobile: { type: Number}
}, 
{
    timestamps: true,
    collection: "OTP"
});

var OTP = module.exports = mongoose.model('OTP', OTPSchema);
