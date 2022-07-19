const express = require('express');
const app = express();
const mangaRouter=require('./router/mangaRouter')
const userRouter=require('./router/userRouter')
app.use(express.json());
app.use('/api/manga',mangaRouter)
app.use('/api/user',userRouter)
app.listen(3001, () => console.log('server dang lang nghe nguoi dung tren cong 3001'))
