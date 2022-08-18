const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought, 
    updateThought,
    postReaction,
    deleteReaction
  } = require('../../controllers/thoughtController');
  
//   /api/thoughts
  router.route('/').get(getThoughts).post(createThought);
  
  // /api/thoughts/:id
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
  

  // /api/thoughts/:Id/reaction
  router.route('/:thoughtId/reactions').post(postReaction).delete(deleteReaction);




  module.exports = router;
  