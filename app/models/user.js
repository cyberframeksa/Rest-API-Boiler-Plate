var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

module.exports = mongoose.model('User', new Schema({
    first_name:         {type: String, default:null },
    last_name:          {type: String, default:null },
    gender:             {type: String, default:null },
    blood_group:        {type: String, default:null },
    dob:                {type: String, default:null },
    mobile:             {
                            type: Number, 
                            validate: {
                                validator: function(v) {
                                    var re = /^\d{10}$/;
                                    return (re.test(v));
                                },
                                message: 'User mobile number is invalid !'
                            },
                            default:null
                        },
    alt_mobile:         {
                            type: Number,
                            default:null, 
                            // validate: {
                            //     validator: function(v) {
                            //         var re = /^\d{10}$/;
                            //         return (re.test(v));
                            //     },
                            //     message: 'User alternate mobile number is invalid !'
                            // }
                        },
    email:              {
                            type: String,
                            trim: true,
                            lowercase: true,
                            unique: true,
                            required: 'Email address is required',
                            validate: [validateEmail, 'Please fill a valid email address !'],
                            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
                            default:null
                        },
    password:           {type: String, default:null },
    address:            {type: String, default:null },
    area:               {type: String, default:null },
    city:               {type: String, default:null },
    state:              {type: String, default:null },
    pincode:            {
                            type: Number,
                            default:null,
                            // validate: {
                            //     validator: function(v) {
                            //         var re = /^\d{6}$/;
                            //         return (re.test(v));
                            //     },
                            //     message: 'User pincode is invalid !'
                            // }
                        },
    aadhar:             {type: Number, default:null },
}, 
{
    timestamps: true,
    collection: 'User'
}));