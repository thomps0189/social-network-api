const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getAllThought)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reaction')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;