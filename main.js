import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import UserRoutes from "./server/routes/UserRoutes";

const API = Express();
const PORT = process.env.PORT || 9000;

API.use(cors());
API.use(bodyParser.json());

UserRoutes(API);

API.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
