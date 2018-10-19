const axios             = require('axios');
const userDb            = require('../database/models/userDb.js');
const bcrypt            = require('bcryptjs');
const jwt               = require('jsonwebtoken');
const { jwtKey }        = require('../_secrets/keys.js');

const { authenticate }  = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

const secret = jwtKey;
const generateNewToken = user => {
  const payload = user;
  const options = {
    expiresIn: '10m', // 10 minutes
  };
  return jwt.sign(payload, secret, options);
};

function register(req, res) {
  const credentials = req.body;
  return bcrypt
    .hash(credentials.password, 12, function(bcryptErr, hash) {
      if (bcryptErr) {
        return res.status(500).json({ error: `Bcrypt hashing failed: ${ bcryptErr }` });
      }
      credentials.password = hash;
      return userDb
        .insertNewUser(credentials)
        .then(id => {
          const user = {
            username: credentials.username,
          };
          const token = generateNewToken(user);
          return res.status(201).json({
            username: credentials.username,
            token: token,
          });
        })
        .catch(err => res.status(500).json({ error: `Server failed to insert new user: ${ err }` }));
    });
}

function login(req, res) {
  const credentials = req.body;
	if (!credentials.username) {
		return res.status(401).json({ error: 'Username must not be empty.' });
	}
	if (!credentials.password) {
		return res.status(401).json({ error: 'Password must not be empty.' });
  }
  return userDb
    .getUser(credentials.username)
    .then(user => {
      return bcrypt
        .compare(credentials.password, user.password)
        .then((match) => {
          if (match) {
            const loggedInUser = {
              username: credentials.username,
            };
            const token = generateNewToken(loggedInUser);
            return res.status(201).json({
              username: user.username,
              token: token,
            });
          }
          return res.status(401).json({ error: 'You shall not pass!' });
        })
    })
    .catch(err => res.status(500).json({ error: `Server failed to get user: ${ err }`}));
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
