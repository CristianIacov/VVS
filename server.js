const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());
app.listen(3001, () =>{
	console.log('I am listening to port 3001');})


const my_users = {

	users: [
	{
		name:'admin',
		password:'admin'
	},

	{
		name:'cristi',
		password:'cristi'
	}]
}

app.post('/signin', (req,res) => {
	if(req.body.name === 'admin' && req.body.password === 'admin')
		res.json('admin');
	else{
	if(req.body.name === 'cristi' && req.body.password === 'cristi')
		res.json('success');
	else
		res.status(400).json('400 ERROR');
}})

app.get('/amg', (req,res) => {
res.json('amg')})

app.get('/rsq8', (req,res) => {
res.json('rsq8')})