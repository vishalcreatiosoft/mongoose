const mongoose = require('mongoose')

mongoose.connect(('mongodb://127.0.0.1:27017/task-manager-api'),{
    useNewUrlParser:true,
   // useCreateIndex:true
})

const Tasks = mongoose.model('Tasks',{
    name:{
        type:String
    },
    age : {
        type: String
    }
})

const task = new Tasks({
    work : 'morning walk',
    age : 23
})

task.save().then(()=>{
    console.log(task)
}).catch((e)=>{
    console.log('Error : ',e)
})

// const Users = mongoose.model('Users',{
//     name:{
//          type:String 
//     },
//     age:{
//         type:Number
        
//     }
// })

// const user = new Users({
//     name: 'Adam gill ',
//     age : 56
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((e) => {
//     console.log('Error : ', e)
// })