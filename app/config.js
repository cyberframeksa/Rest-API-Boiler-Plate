// const URL = 'http://localhost:3000/api';  //Local Server URL
const URL = 'https://appointment-backend.herokuapp.com/api';  //Heroku Live Server URL

module.exports = {
    'database': 'mongodb://appointment:appointment@ds153198.mlab.com:53198/appointment', // Mlab Live Server Database
    'token_secret': 'api_secret',
    'token_expire':'30 days',
    'SERVER_URL': URL
};

