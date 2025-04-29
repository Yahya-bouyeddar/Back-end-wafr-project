import express from 'express'
import {getAllUsers,searchUserByPhone,blockUser,unblockUser} from '../controllers/userController.js'
const router = express.Router()
router.get('/',getAllUsers)
router.get('/searsh',searchUserByPhone)
router.put('/:id/block',blockUser)
router.put('/:id/unblock',unblockUser)
export default router
