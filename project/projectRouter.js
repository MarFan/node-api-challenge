const router = require('express').Router();

const projectDB = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectDB.getList()
        .then(projects => res.status(200).json(projects))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error retrieving a list of projects' })})
})

router.get('/:id', (req, res) => {
    projectDB.get(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({ error: 'There was an error'}))
})

router.get('/:id/actions', (req, res) => {
    projectDB.getProjectActions(req.params.id)
        .then(project => res.status(200).json(project))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error getting the projects actions.' })});

});

router.post('/', (req, res) => {
    projectDB.insert(req.body)
        .then(project => res.status(200).json(project))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error adding a new project'})})
});

router.put('/:id', (req, res) => {
    projectDB.update(req.params.id, req.body)
        .then(project => res.status(200).json(project))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error updating the project.' })});
});

router.delete('/:id', (req, res) => {
    projectDB.remove(req.params.id)
        .then(project => res.status(201).json(project))
        .catch(err => {console.log(err); res.status(500).json({ error: 'There was an error deleting the project.'})})
});

module.exports = router;