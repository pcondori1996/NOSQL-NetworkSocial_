const { Schema, model } = require('mongoose');
const { Reaction } = require('./Reaction')
const moment = require('moment')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1
        },
        //ASK TUTOR FOR HELP ON GETTER FOR CREATED AT
        createdAt: {
            type: Date,
            default: Date.now(),
            // get: moment().format('MMMM Do YYYY, h:mm:ss a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;