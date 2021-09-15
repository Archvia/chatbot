var fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('{"Hello": "world!"}')
})

app.post('/', (req, res) => {
  const wordArray = req.body.message.split(' ');
  var f;
  fs.readFile('conf.json', function(err, data) {
    f = JSON.parse(data);
    var topicArray = [];
    wordArray.forEach(word => {
      topicArray = topicArray.concat(f.filter(topic => topic.tag.some(t => t == word )) )   
    });
    
    res.send(JSON.stringify( {"res": topicArray } ));
  });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
