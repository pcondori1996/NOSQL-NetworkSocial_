const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    postFriend,
    deleteFriend
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
  

  // /api/user/:userId/friends/:friendId
  router.route('/:userId/friends/:friendId').post(postFriend).delete(deleteFriend);




  module.exports = router;
  