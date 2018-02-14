const express = require('express');
const app = express()
const fs = require('fs');

app.use(express.json());
app.use(express.static('client'))

let obj = [];
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => {
	obj.push(req.body);

  fs.readFile('./samples/sales_report.json', (err, data) => {
    if (err) throw err;
    let storage = JSON.parse(data.toString());
    let counter = 1;

    let result = [["firstName","lastName","county","city","role","sales"]]
    let search = function (object, index) {
    	counter++;
      result[index] = [];
      result[index].push(
      object.firstName,
      object.lastName,
      object.county,
      object.city,
      object.role,
      object.sales,
      )
      if (object.children.length) {
        object.children.forEach(item => search(item, counter))
      }
    }
    search(storage, counter);
    obj.forEach(item => search(item, counter));

    

	  res.json(result);
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))