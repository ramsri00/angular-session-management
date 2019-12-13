const  mongoose= require('mongoose');

const userSchema= mongoose.Schema({
    firstName:{type:String,required:true, unique:false},
    lastName :{type:String,required:true, unique:false},
    email:{type:String,required:true, unique:false},
    password:{type:String,required:true, unique:false},
    mobileNumber: {type:String,required:true, unique:false},


});

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true, unique: false },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
//     });
//     userSchema.plugin(uniqueValidator);
//     module.exports.User = mongoose.model("users", userSchema);

module.exports.users=mongoose.model('users',userSchema);