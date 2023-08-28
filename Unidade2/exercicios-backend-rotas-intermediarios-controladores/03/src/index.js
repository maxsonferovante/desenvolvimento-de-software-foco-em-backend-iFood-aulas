const { express } = require('express');
const { roteador } = require('./roteador');

const app = express();

app.use(express.json());
app.use(roteador);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});