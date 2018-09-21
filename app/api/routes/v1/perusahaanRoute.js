const express = require('express');
const validate =require('express-validation');
const perusahaanController = require('../../controllers/perusahaanController');
const { authorize, ADMIN, LOGGED_USER } = require('../../../middleware/auth');
const {tambahProfil, editProfil, hapusProfil, getProfil} =require('../../validations/perusahaan.validation');

const router = express.Router();
router
  .route('/companyprofil')
/**
* @api {post} api/company/companyprofil Add Company Profil
* @apiDescription Add New Company Profil
* @apiVersion 1.0.0
* @apiName Add Company Profil
* @apiGroup Admin
* @apiPermission ADMIN
*
* @apiHeader {String} Athorization  User's access token
*
* @apiParam {String} nama_perusahaan nama of company
* @apiParam {String} email email of company
* @apiParam {String} profil Profil Description of company
* @apiParam {String} peraturan rule of company
*
* @apiSuccess (Created 201) {String}   nama_perusahaan        company name
* @apiSuccess (Created 201) {String}   email        company Email
* @apiSuccess (Created 201) {String}   profil        company profil Description
* @apiSuccess (Created 201) {String}   peraturan        company rule
* @apiSuccess (Created 201) {String}   user.createdAt  Timestamp
*
* @apiError (Bad Request 400) Validator some parameters may contain invalid values
*/
    .post(authorize(ADMIN), perusahaanController.addcompanyprofil)
    /**
    * @api {get} api/company/companyprofil Get Company Profil
    * @apiDescription Get  Company Profil
    * @apiVersion 1.0.0
    * @apiName Get Company Profil
    * @apiGroup Company
    * @apiPermission all users
    *
    * @apiHeader {String} Athorization  User's access token
    *
    * @apiSuccess (Created 201) {String}   nama_perusahaan   company name
    * @apiSuccess (Created 201) {String}   email        company Email
    * @apiSuccess (Created 201) {String}   profil        company profil Description
    * @apiSuccess (Created 201) {String}   peraturan        company rule
    * @apiSuccess (Created 201) {String}   user.createdAt  Timestamp
    *
    * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
    * @apiError (Not Found 404)    NotFound     User does not exist
    * @apiError (Bad Request 400) Validator some parameters may contain invalid values
    */
    .get(authorize(), perusahaanController.getcompanyprofil);
    router
      .route('/companyprofil/:id')    
    /**
    * @api {put} api/company/companyprofil/:id Edit Company Profile
    * @apiDescription edit company profile
    * @apiVersion 1.0.0
    * @apiName editcompanyprofil
    * @apiGroup Admin
    * @apiPermission Admin
    *
    * @apiHeader {String} Athorization  User's access token
    *
    * @apiParam {String} nama_perusahaan nama of company
    * @apiParam {String} email email of company
    * @apiParam {String} profil Profil Description of company
    * @apiParam {String} peraturan rule of company
    *
    * @apiSuccess (Created 201) {String}   nama_perusahaan   company name
    * @apiSuccess (Created 201) {String}   email        company Email
    * @apiSuccess (Created 201) {String}   profil        company profil Description
    * @apiSuccess (Created 201) {String}   peraturan        company rule
    * @apiSuccess (Created 201) {String}   company.createdAt  Timestamp
    *
    * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
    * @apiError (Not Found 404)    NotFound     User does not exist
    * @apiError (Bad Request 400) Validator some parameters may contain invalid values
    */
    .put(authorize(), perusahaanController.editcompanyprofil)
    /**
    * @api {delete} api/company/companyprofil/:id Delete Company Profile
    * @apiDescription delete company profile
    * @apiVersion 1.0.0
    * @apiName deletecompanyprofil
    * @apiGroup Admin
    * @apiPermission ADMIN
    *
    * @apiHeader {String} Athorization  User's access token
    *
    * @apiSuccess (Created 200) {String}   message    Deleted
    *
    * @apiError (Bad Request 400) Validator some parameters may contain invalid values
    * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
    * @apiError (Not Found 404)    NotFound     User does not exist
    */
    .delete(authorize(), perusahaanController.deletecompanyprofil);
module.exports = router;
