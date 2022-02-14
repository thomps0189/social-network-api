const {
    Schema,
    model,
    Types
} = require('mongoose');

const dateFormat = require('../utils/dateFormat')

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    createdBy: {
        type: String,
        required: true
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;