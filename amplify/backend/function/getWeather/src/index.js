/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const axios = require('axios');
exports.handler = async (event) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.748004761173796&lon=-73.9972450826255&appid=9d078590b75f76a8f744905541a91990&units=metric`
    );
    let body = {};
    body.temp = res.main.temp;
    body.min = res.main.temp_min;
    body.max = res.main.max;
    body.type = res.weather.main;

    const response = {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
