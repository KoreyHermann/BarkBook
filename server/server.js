// const express = require('express');
// const mongoose = require('mongoose');
// const fileUpload = require('express-fileupload');
// const path = require('path');

// const app = express();

// mongoose.connect('mongodb://localhost/barkbook', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// app.use(fileUpload());

// const petSchema = new mongoose.Schema({
//   name: String,
//   breed: String,
//   age: Number,
//   gender: String,
//   photo: String,
// });
// const Pet = mongoose.model('Pet', petSchema);

// app.post('/api/pets', (req, res) => {
//   if (!req.files || !req.files.photo) {
//     return res.status(400).json({ error: 'No photo uploaded'})}
// });

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


