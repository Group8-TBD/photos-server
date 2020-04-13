const express = require('express')
const app = express()
const port = 3001
const db = require('../db/index.js')
const bodyParser = require('body-parser')
const Controller = require('./controller.js')

//***************MIDDLEWARE**************\\

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//****************API CALLS**************\\

app.get('/properties/:property_id', Controller.getImages);
app.get('/properties/:image_id', Controller.getImage);
app.post('/properties', Controller.postImage);
app.post('/properties/:property_name', Controller.postProperty);
app.patch('/properties', Controller.updateImage);
app.delete('/properties/:image_id', Controller.deleteImage);
app.delete('/properties/property_id', Controller.deleteProperty);



//****************PORT OPENING**************\\
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
