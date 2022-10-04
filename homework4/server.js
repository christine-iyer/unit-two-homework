const express = require('express')
const app = express();

// Mount routes
app.get('/:num1', (req, res) => {
     let num1 = Math.round(parseInt(req.params.num1));
     let num2 = num1 - 1
     const verse1 = 'bottles of beer on the wall, ';
     const verse2 = verse1.slice(0,-13) + ".";
     const verse3 = ", take one down pass it around,"
     res.send(
          `<h3>${num1} ${verse1} ${num1} ${verse2}</h3></br>
          <h3><a href = "${num2 === 0? '/' : num2}">${num2 ===0? 'Start over.' : "Take one down, pass it around, "}</a></h3></br>
          <h3>${num2} ${verse1}</h3>`
          );
});
app.listen(3000, function() {
     console.log('Listening on port 3000');
    });