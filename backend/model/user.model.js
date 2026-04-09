import mogoose from 'mongoose';

const userSchema = new mogoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})
    const User = mogoose.model('User',userSchema);
    export default User;