const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('This is the index page');
})

app.get('/about', (req, res) => {
    res.send('This is the about page');
})

app.get('/users/:email', (req, res) => {
  res.send(`This user email is ${req.params.email}`);
})




app.use((req, res) => {
  res.status(404).send('Page not found');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})