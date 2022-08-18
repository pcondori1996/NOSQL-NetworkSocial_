const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reaction');
const { Reaction } = require('./Reaction')


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
            get: (date) => timeSince(date)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsSchema]
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