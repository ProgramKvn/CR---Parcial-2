const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, mongoUri} = require('./config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser  = require('body-parser');
const nuevaPrestamistaRoutes = require('./routes/api/nuevaPrestamista');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Se ha conectado satisfactoriamente a la base')).catch((err) => console.log(err));

app.use('/api/nuevaPrestamista', nuevaPrestamistaRoutes);
app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
