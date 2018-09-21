const express = require('express');
const validate = require('express-validation');
const PresentController = require('../../controllers/presentController');
const { authorize, ADMIN, LOGGED_USER } = require('../../../middleware/auth');
const {
  listUsers,
  createUser,
  replaceUser,
  updateUser,
} = require('../../validations/user.validation');

const router = express.Router();
router
  .route('/addPresent')
  /**
   * @api {post} api/present/addPresent User Present
   * @apiDescription post present user's
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiParam  {String}   email      email's user
   * @apiParam  {String}   nama       name's user
   * @apiParam  {String}   backlog    backlog's user
   * @apiParam  {String}   status_prs task's status (0=will do|1=done|2=obstacle)
   * @apiParam  {String}   task       task's user
   * @apiParam  {String}   note       note's user
   *
   * @apiSuccess {String}  id         present's id
   * @apiSuccess {String}  email      user's id
   * @apiSuccess {String}  nama       name's user
   * @apiSuccess {String}  backlog    Backlog
   * @apiSuccess {String}   status_prs task's status (0=will do|1=done|2=obstacle)
   * @apiSuccess {String}  status_prs status_prs
   * @apiSuccess {String}  task       Task
   * @apiSuccess {String}  Note       Note
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .post(authorize(), PresentController.addPresent);
  router.route('/getAllPresent')
  /**
   * @api {get} api/presents/getAllPresent Get All User Present
   * @apiDescription get present user's
   * @apiVersion 1.0.0
   * @apiName getAllPresent
   * @apiGroup Admin
   * @apiPermission ADMIN
   *
   * @apiHeader {String} Athorization  User's access token

   * @apiSuccess {String}  id         present's id
   * @apiSuccess {String}  email      user's id
   * @apiSuccess {String}  backlog    Backlog
   * @apiSuccess {String}  task       Task
   * @apiSuccess {String}  Note       Note
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .get(authorize(ADMIN), PresentController.getAllPresent);
  router.route('/getOnePresent/:id')
  /**
  * @api {get} api/presents/getOnePresent/:userId get One Present
  * @apiDescription get present user's
   * @apiVersion 1.0.0
   * @apiName getOnePresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  User's access token

   * @apiSuccess {String}  id         present's id
   * @apiSuccess {String}  email      user's id
   * @apiSuccess {String}  backlog    Backlog
   * @apiSuccess {String}   status_prs task's status (0=will do|1=done|2=obstacle)
   * @apiSuccess {String}  task       Task
   * @apiSuccess {String}  Note       Note
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data

*/
.get(authorize(), PresentController.getOnePresent);
module.exports = router;
