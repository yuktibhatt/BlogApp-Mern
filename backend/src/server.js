const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 8000;

const articlesInfo = {
    'learn-react': {
        comments : [],
    },
    'learn-node': {
        comments : [],
    },
    'my-thoughts-on-learning-react': {
        comments : [],
    }

};


//routes

app.post('/api/articles/:name/add-comments', (req, res) => {
 const { username, text} = req.body;
 const articleName = req.params.name;

 articlesInfo[articleName].comments.push({ username, text });
 res.status(200).send(articlesInfo[articleName]);
});



app.listen(port , () => console.log("Listening on port 8000..."));

