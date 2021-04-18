import express from 'express';
import mongoose from 'mongoose'
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routes/orderRouter.js';
import cors from 'cors';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);

app.get('/',(req,res) =>{
    res.send('Server is ready');
});

app.use((err,req,res) => {
    res.status(500).send({message:err.message});
})
const port = process.env.PORT||5000;

app.listen(port,() =>{
    console.log(`Server at http://localhost:${port}`);
})