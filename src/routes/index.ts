import { Router } from 'express';
import { getAccountById } from 'src/controller/sms-data';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

const smsRouter = Router();
smsRouter.get('/:id', getAccountById);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/v1/accounts', smsRouter);
export default baseRouter;
