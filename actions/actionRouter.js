const router = require('express').Router();

const actionDB = require('../data/helpers/actionModel');

router.get('/:id', (req, res) => {
    actionDB.get(req.params.id)
        .then(res => res.status(200).json(res))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error'})})
});

router.post('/', (req, res) => {
    actionDB.insert()
        .then(res => res.status(200).json(res))
        .catch(err => {console.log(err); res.status(500).json({error: 'Error adding action.'})})
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router;