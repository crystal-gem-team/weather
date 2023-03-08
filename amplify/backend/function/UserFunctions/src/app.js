/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const axios = require('axios');
const AWS = require('aws-sdk');



// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/user/activity', (req, res) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'Funshine',
    Key: {
      'funshine': 'activity'
    }

  };
  docClient.get(params, (err, data) => {
    if (err) {
      console.log('Error finding user:', err);
    } else {
      console.log('User found successfully:', data.Item.activity['rainy,hot'][0]);
      res.json(data);
    }
  });
})

app.get('/user/weather', async function (req, res) {
  try {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.748004761173796&lon=-73.9972450826255&appid=9d078590b75f76a8f744905541a91990&units=metric`
    );
    response = response.data;

    let body = {};
    body.temp = response.main.temp;
    body.min = response.main.temp_min;
    body.max = response.main.temp_max;
    body.type = response.weather[0].main;
    body.date = new Date().toDateString();

    res.status(200).json(body);
  } catch (error) {
    console.log(error);
  }
});

//user info from DB
app.get('/user', (req, res) => {
  const { user } = req.query;
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'Funshine',
    Key: {
      'funshine': user
    }
  }
  docClient.get(params, (err, data) => {
    if (err) {
      console.log('error occured getting from DB for user, ', err);
      res.json('error occured on backend fetching');
    } else {
      console.log('fetched data for user, ', data);
      res.json(data.Item);
    }
  })
  
});

app.post('/user', (req, res) => {
  const { zip, scale, name, username } = req.body;
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'Funshine',
    Item: {
      'funshine': username,
      zip: zip,
      scale: scale,
      name: name,
    }
  }

  docClient.put(params, (err, data) => {
    if (err) {
      console.log('error occured updating from DB for user, ', err);
      res.json('error occured on backend fetching');
    } else {
      console.log('updated data for user, ', data);
      res.json(data);
    }
  })
})

// app.get('/user', function (req, res) {
//   // get user settings
//   res.json({ success: 'get call succeed!', url: req.url });
// });

// app.post('/user', function (req, res) {
//   // post new user default setting
//   res.json({ success: 'post call succeed!', url: req.url });
// });

// app.put('/user', function (req, res) {
//   // change user default setting
//   res.json({ success: 'put call succeed!', url: req.url, body: req.body });
// });

// app.delete('/user', function (req, res) {
//   // delete user
//   res.json({ success: 'delete call succeed!', url: req.url });
// });

app.use('*', (req, res) => {
  res.json({ error: 'wrong!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
