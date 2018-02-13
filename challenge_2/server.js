const express = require('express');
const parser = require('body-parser');
const app = express()


app.use(parser.json());
app.use(express.static('client'))


app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => {
	console.log(req.body);
	res.send(req.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))