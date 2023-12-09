const express = require('express');
const path=require('path');
const router = express.Router();

router.get('/',(req,res,next) => {
	//console.log('In another middleware!');
	//res.send('<h1>Hello from Express!</h1>');
	res.sendFile(path.join(__dirname,'danhsach.html'));
})

router.get('/mh1',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh1.html'));
});

router.get('/mh2',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh2.html'));
});


router.get('/images.jpg',(req,res,next) => {
	res.sendFile(path.join(__dirname,'/images/images.jpg'));
});
router.get('/anh1.jpg',(req,res,next) => {
	res.sendFile(path.join(__dirname,'/images/anh1.jpg'));
});


router.get('/mh3',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh3.html'));
});

router.get('/mh4',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh4.html'));
});

router.get('/mhxtt',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mhxtt.html'));
});

router.get('/mh5',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh5.html'));
});

router.get('/mh6',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh6.html'));
});

module.exports = router;

