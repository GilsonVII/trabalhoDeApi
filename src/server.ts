//Gilson Alberice
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/userRoutes';
import postsRouter from './routes/postsRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});