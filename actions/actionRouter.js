const router = require('express').Router();

const actionDB = require('../data/helpers/actionModel');

router.get('/:id', (req, res) => {
    actionDB.get(req.params.id)
        .then(action => res.status(200).json(action))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error' })})
});

router.post('/', (req, res) => {
    actionDB.insert(req.body)
        .then(action => res.status(200).json(action))
        .catch(err => {console.log(err); res.status(500).json({error: 'Error adding action.' })})
})

router.put('/:id', (req, res) => {
    actionDB.update(req.params.id)
        .then(action => res.status(200).json(action))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error updating the action' })})
})

router.delete('/:id', (req, res) => {
    actionDB.remove(req.params.id)
        .then(action => res.status(200).json(action))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error removing the action' })})
})

module.exports = router;