'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

// Error codes
app.get('/problem', (req, res) => {
	res.status(500).send('There was a problem on the server')

})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})