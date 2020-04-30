const express = require('express');
const card_model = require('../models/card_model');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		let getCards = await card_model.find()
		res.json(getCards)
	} catch (err) {
		res.json({message: err})
	}
});
router.post('/', async (req, res) => {
    let card = card_model({
		name: req.body.name,
        number: req.body.number,
        expiry: req.body.expiry,
        cvc: req.body.cvc
	})
	try {
		let savedcard = await card.save()
		res.json(savedcard)
	} catch (err) {
		res.json({message: err})
	}
});
router.put('/', async (req, res) => {
		
});
router.post('/delete', async (req, res) => {
	
});



module.exports = router;