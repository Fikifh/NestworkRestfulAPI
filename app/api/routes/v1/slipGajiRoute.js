const express = require('express');
const validate = require('express-validation');
const slipGajiController = require('../../controllers/slipGajiController')

const { authorize, ADMIN, LOGGED_USER } = require('../../../middleware/auth');
const router = express.Router();

const {
  ajukanCuti,
  getAllCuti,
  getOneCuti,
  accCuti,
  tolakCuti,
  findByStatus,
  findByRespons,
  DeleteAllCuti,
  deleteCuti,
  dropCollectionCuti
} = require('../../validations/cuti.validation');

router
  .route('/ajukanSlipGaji')
  /**
   * @api {post} api/slipGaji/ajukanSlipGaji Propose User's Salary Slip
   * @apiDescription propose user Salary slip
   * @apiVersion 1.0.0
   * @apiName UserSlipGaji
   * @apiGroup User
   * @apiPermission User
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiParam  {String}   email   email's user
   * @apiParam  {Date}     waktu   waktu pengajuan
   * @apiParam  {String}   status  status slip gaji
   * @apiParam  {String}   gaji   gaji
   * @apiParam  {String}   nama   name of user
   *
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   waktu   waktu pengajuan
   * @apiSuccess  {String}   status  status slip gaji
   * @apiSuccess  {String}   gaji   gaji
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
    .post(authorize(LOGGED_USER), validate(ajukanCuti), slipGajiController.ajukanSlipGaji);
router.route('/getAllSlipGaji')
  /**
   * @api {get} api/slipGaji/getAllSlipGaji Get All User's Salary Slip
   * @apiDescription get all user's Salary slip
   * @apiVersion 1.0.0
   * @apiName getAllUserSalarySlip
   * @apiGroup Admin
   * @apiPermission ADMIN
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   waktu   waktu pengajuan
   * @apiSuccess  {String}   status  status slip gaji
   * @apiSuccess  {String}   gaji   gaji
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .get(authorize(ADMIN), slipGajiController.getAllSlipGaji);
router.route('/getOneSlipGaji/:email')
/**
 * @api {get} api/slipGaji/getOneSlipGaji/:email Get One User's Salary Slip
 * @apiDescription get one user Salary slip
 * @apiVersion 1.0.0
 * @apiName getOneUserSalarySlip
 * @apiGroup User
 * @apiPermission user
 *
 * @apiHeader {String} Athorization  User's access token
 *
 * @apiSuccess  {String}   email       email's user
 * @apiSuccess  {Date}     waktu   waktu pengajuan
 * @apiSuccess  {String}   status  status slip gaji
 * @apiSuccess  {String}   gaji   gaji
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
 */
  .get(authorize(LOGGED_USER), slipGajiController.getOneSlipGaji);
  router
    .route('/updateSlipGaji/:id')
  /**
   * @api {get} api/slipGaji/updateSlipGaji/:id Update User's Salary Slip
   * @apiDescription Update user Salary slip
   * @apiVersion 1.0.0
   * @apiName updateUserSalarySlip
   * @apiGroup Admin
   * @apiPermission ADMIN
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}     waktu   waktu pengajuan
   * @apiSuccess  {String}   status  status slip gaji
   * @apiSuccess  {String}   gaji   gaji
   * @apiSuccess  {String}   nama   nama
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .put(authorize(), slipGajiController.updateSlipGaji);
  router
    .route('/deleteSlipGaji/:id')
    /**
     * @api {delete} api/slipGaji/deleteSlipGaji/:id Delete User's Salary Slip Using Id
     * @apiDescription Delete User's Salary Slip Using Id
     * @apiVersion 1.0.0
     * @apiName deleteUserSalarySlip
     * @apiGroup User
     * @apiPermission all users
     *
     * @apiHeader {String} Athorization  User's access token
     *
     * @apiSuccess  {String}   message Deleted
     *
     * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
     */
    .delete(authorize(), slipGajiController.deleteSlipGajiUseId);
module.exports = router;
