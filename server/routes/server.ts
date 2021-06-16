import * as path from 'path';
import * as express from 'express';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(p));
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port,() => {
    console.log('running on port '+port)
});