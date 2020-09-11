const compression = require('compression')
const express = require('express')
const app = express()
app.use(compression())


app.use(express.static('./dist/gfn-library-catalog'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/gfn-library-catalog/'}),
);

app.listen(process.env.PORT || 8080);