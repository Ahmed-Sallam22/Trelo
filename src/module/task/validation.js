import joi from 'joi'
import Joi from 'joi'

export const addTask=joi.object({
    
    title: joi.string().min(5).max(25).trim().required(),
    description: joi.string().min(20).max(250).trim().required(),
    assignTo:[
        joi.string(),
        joi.number()
    ],
     deadline: joi.date().required(),
},   
).required()
export const updateTask=joi.object({
    title: joi.string().min(5).max(25).trim().required(),
    description: joi.string().min(20).max(250).trim().required(),
    assignTo:[
        joi.string(),
        joi.number()
    ],
    status:joi.string().valid("Done", "Doing","toDo").required(),
    id:[
        joi.string(),
        joi.number()
    ],
}).required()