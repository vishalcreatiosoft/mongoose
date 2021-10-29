const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(('mongodb://127.0.0.1:27017/task-manager-api'),{
    useNewUrlParser:true,
   
})


const Task = mongoose.model('Task',{
    description:{
        type: String,
        trim: true,
        required: true
        
    },
    completed : {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description : 'complte JS course   ',
    
})

task.save().then(()=>{
    console.log(task)
}).catch((e)=>{
    console.log('Error : ',e)
})

