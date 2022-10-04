// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
  	res.send('<h1>Hello World!</h1>');
});
// Greeting
app.get('/greeting/:name',(req, res) => {
     const name = req.params.name
     res.send(`<h1>Hello, ${req.params.name},  good to see you. </h1>`)
   })

//Tip

   app.get('/tip/:total/:tipPercent',(req, res) => {
     const tipAmount = Math.round(parseInt(req.params.total)) * (parseInt(req.params.tipPercent)/100)
     res.send(`<h2>The answer is ${tipAmount}</h2>`)
   })

// Magic 8 Ball
app.get('/magic/:str', (req,res) => {
  var arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it, yes"]
  let randomItem = arr[Math.floor(Math.random()*arr.length)];
  res.send(`<h1>${randomItem}</h1>`)
})
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
 });
 



