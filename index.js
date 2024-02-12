const express = require('express');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

const PORT = process.env.PORT || 8080;
const app = express();

// app.get('/', (req, res) => {
//     res.send('NODEMON WORK');
// });


app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
