const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const BodyStarter

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever'), (req, res) => {res.send('Good Bye')}

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello' + req.params.name)})


    app.get('/test', (req, res) =>{
        //res.send('i will send a fie')

        res.sendFile(path.join(__dirname + '/index.html'))
    })
    
    app.get('/api/movies', (req, res)=> {
        const movies = [
             { "Title":"Avengers: Infinity War",
              "Year":"2018",
               "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" }, 
             { "Title":"Captain America: Civil War",
              "Year":"2016", 
              "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg" } ]
        
        res.status(200).json({  
            message: 'everything is good',
            myMovies:movies
})
})

app.post('/name', (req,res)=> 
    console.log('post calling');
    console.log(req.body.fname);

    send(body)


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/name', (req,res)=> 
    console.log('route calling');

    console.log(req.query.lname);

    res.send('hello'+ req.query.fname + rew '' + req.query.lname);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
