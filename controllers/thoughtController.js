const { User, Thought, Reaction } = require('../models');

module.exports = {
    
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
  
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
   
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
           ThoughtfindOneAndUpdate(
            {_id: body.userId},
            { $pull: { thoughts: thought._id}},
            { runValidators: true, new: true}           )
        )
            .then((thought) => res.json({ message: 'User and associated thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.updateOne(
            { _id: req.params.thoughtId },
            req.body
            // { $set: { thoughtText: req.body.thoughtText,
            //             username: req.body.username}},
            // { runValidators: true, new: true }
        ).then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No User' })
                : res.json(thought)
        )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    postReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: {reaction: req.body} },
            { runValidators: true, new: true }
        ).then((thought) =>
        !thought
            ?res    
                .status(404)
                .json({ message: 'No user with that ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: {reactions: req.body} },
            { runValidators: true, new: true }
        ).then((thought) =>
        !thought
            ? res    
                .status(404)
                .json({ message: 'No user with that ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
        
    },
};
