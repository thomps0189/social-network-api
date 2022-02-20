const {
    User,
    Reaction,
    Thought
} = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought.find({})
            .populate({
                path: 'reaction',
                select: '-__v'
            })
            .select('-__v')
            .sort({
                _id: -1
            })
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
    addReaction(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.id
            }, {
                $addToSet: {
                    reaction: req.body
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