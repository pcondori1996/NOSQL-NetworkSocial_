const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please add a valid email address.',]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }],

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);


UserSchema.virtual('friendCount').get(function () {
return this.friends.length; 
});

const User = model('user', UserSchema);

module.exports = User;