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
            match:  [/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-z\.]{2,6})$/, 
                   "Please fill a valid email address",],
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