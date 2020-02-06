import Express from 'express';
import cors from 'cors';
import Authentication from './server/middleware/Authentication';
import bodyParser from 'body-parser';
import AuthenticationRoutes from "./server/routes/AuthenticationRoutes";
import UserRoutes from "./server/routes/UserRoutes";
import Dependency from "./server/middleware/Dependency";
import UserService from "./server/services/UserService";

const API = Express();
const PORT = process.env.PORT || 9000;

API.use(cors());

API.use(Authentication({
    whitelist: ['/authentication']
}));

API.use(Dependency([
    {name: 'user', service: UserService},
]));

API.use(bodyParser.json());

AuthenticationRoutes(API);
UserRoutes(API);

API.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
