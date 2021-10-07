const compression = require('compression')
const express = require('express')
const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 5
  });
const app = express()
app.use(compression())
const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 5
  });

app.use(express.static('./dist/gfn-library-catalog'));

app.get('/*', limiter, (req, res) =>
    res.sendFile('index.html', {root: 'dist/gfn-library-catalog/'}),
);

app.listen(process.env.PORT || 8080);