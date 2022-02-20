const {
    User,
    Reaction,
    Thought
} = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    getThoughtById(req, res) {
        Thought.findOne({
                _id: params.id
            })
            .populate({
                path: 'reaction',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No thought found with this id'
                    })
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(404).json(err)
            })
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err))
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No Thought found with this id'
                    });
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err))
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({
                _id: params.id
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No thought found with this id'
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err))
    },
    addReaction({
        params,
        body
    }, res) {
        Thought.findOneAndUpdate({
                _id: params.thoughtId
            }, {
                $addToSet: {
                    reactions: body
                }
            }, {
                runValidators: true,
                new: true
            })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No reaction found'
                    });
                    return
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err))
    },
    removeReaction(req, res) {
        Thought.findOneAndDelete({
                _id: req.params.thoughtId
            }, {
                $pull: req.params.reactionId
            }, {
                runValidators: true,
                new: true
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No thought with this id'
                    });
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = thoughtController;