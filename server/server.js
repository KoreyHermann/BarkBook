const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas');
const petRoutes = require('./routes/api/petRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', petRoutes);

// Serve up static assets (production build)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// GraphQL endpoint
server.applyMiddleware({ app });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/barkbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });