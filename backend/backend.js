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


app.post('/', (req, res) => {
  const wordArray = req.body.message.toLowerCase().split(' ');
  let f;
  fs.readFile('conf.json', function(err, data) {
    f = JSON.parse(data);
    let topicArray = [];
    wordArray.forEach(word => {
      topicArray = topicArray.concat(f.filter(topic => topic.tag.some(t => t == word )) )   
    });

    if(topicArray.length < 1){
      const commands = f.map(topic => topic.tag[0]).filter(command => command[0] !== 'X');
      let message = f.find(topic => topic.tag == 'XIDontUnderstand');
      for(c in commands){
        if(c == 0){
          message.message += ' ' + commands[c];
        }else{
          message.message += ', ' + commands[c];
        }
      }

      message.message += '.';
      topicArray.push(message)
    }else {
    // TODO: This is a hack for adding the "can I help you with anything else" message. This should be done in another way..
    topicArray.push(f.find(topic => topic.tag == 'XGoodbye'))
    }
    
    // Removes duplicates. TODO: It would have been smarter to not add duplicates in the first place :)
    topicArray = [...new Set(topicArray)];

    res.send(JSON.stringify( {"res": topicArray } ));
  });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
