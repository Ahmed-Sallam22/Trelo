import {Router} from 'express'
import addTasks from './Controller/addTasks.js'
import auth from '../../middleware/auth.js'
import isonline from '../../middleware/isOnline.js'
import softdelete from '../../middleware/soft.js'
import deleteTask from './Controller/deleteTask.js'
import UpdateTask from './Controller/updateTask.js'
import getAllTask from './Controller/GetAllTask.js'
import getAllCreatedTasks from './Controller/getAllCreatedTasks.js'
import getAllAssignTasks from './Controller/getAllAssignTasks.js'
import GetAllLateTask from './Controller/GetAllLateTask.js'
import * as validate from './validation.js'
import{validation} from '../../middleware/validation.middelware.js'
const router=Router()

router.post('/addTasks',validation(validate.addTask),auth,isonline,softdelete,addTasks)
router.put('/update/:id',validation(validate.updateTask),auth,isonline,softdelete,UpdateTask)
router.delete('/delete/:id',auth,isonline,softdelete,deleteTask)
router.get('/getAllTasks',getAllTask)
router.get('/getAllCreatedTasks',auth,isonline,softdelete,getAllCreatedTasks)
router.get('/getAllAssignTasks',auth,isonline,softdelete,getAllAssignTasks)
router.get('/GetAllLateTask',auth,isonline,softdelete,GetAllLateTask)



export default router