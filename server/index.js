
  const newRelic = require('newrelic')
  const express = require('express')
  const app = express()
  const cors = require('cors')
  const port = 80
  const db = require('../db/index.js')
  const bodyParser = require('body-parser')
  const Controller = require('./controller.js')



  //***************MIDDLEWARE**************\\
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static('public'))

  //****************API CALLS**************\\

  app.get('/properties/:property_id', Controller.getImages);
  app.get('/images/:image_id', Controller.getImage);
  app.post('/images', Controller.postImage);
  app.post('/properties/:property_name', Controller.postProperty);
  app.patch('/images', Controller.updateImage);
  app.delete('/images/:image_id', Controller.deleteImage);
  app.delete('/properties/property_id', Controller.deleteProperty);
  app.get('/loaderio-9c90027235fe92f2ba89250c2f6f4298/',Controller.loadTest)



  //****************PORT OPENING**************\\
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
