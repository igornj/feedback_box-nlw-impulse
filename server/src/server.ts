import express from 'express';
import { routes } from './routes';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});



app.listen(3333, () => {
    console.log('Server running on port: ', 3333);
})