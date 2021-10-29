const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(('mongodb://127.0.0.1:27017/task-manager-api'),{
    useNewUrlParser:true,
   // useCreateIndex:true
})


const Users = mongoose.model('Users',{
    name:{
         type:String,
         required: true
    },
    email :{
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }

    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const user = new Users({
     name: 'Adam gill ',
     email: 'adam@gmail.com',
     age : 20
})

user.save().then(() => {
    console.log(user)
}).catch((e) => {
    console.log('Error : ', e)
})



