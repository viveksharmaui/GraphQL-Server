const app = require('express')();
const graphqlHTTP = require('express-graphql'); // This module is responsible for running graphql with express js app
const schema = require('./schema/schema'); //graph ql schema
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/graphql', (err) => {
	if (err) console.log(err);
	else console.log('Database is connected');
});

// This Middleware is responsible for using graphql schema in express
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(process.env.PORT || 4000, (err) => {
	if (err) console.log(err);
	else console.log('Server is running on port 4000');
});
