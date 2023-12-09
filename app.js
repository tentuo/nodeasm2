const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const aRoutes = require('./route');

//doc noi dung file datanam.json
const {loadUser} = require('./usersmodel');

app.use(bodyParser.urlencoded({extended: false}));
app.use(aRoutes);

/*
app.use((req,res,next) => {
	res.status(404).send('<h1>Page not found</h1>');
	// ...
});
*/

/* doc file datanam.json
app.get('/users',(req,res,next) => {
	const data = loadUser();
	res.send(data);
	// ...
});
*/

app.listen(3000);