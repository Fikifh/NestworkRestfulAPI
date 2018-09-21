const httpStatus = require('http-status');
const { omit } = require('lodash');
const company = require('../models/perusahaan');
const { handler: errorHandler } = require('../../middleware/error');

exports.addcompanyprofil = async (req, res, next) => {
  	try{
  		const profil = new company(req.body);
   		const savedProfil = await profil.save();
        const ProfilTransformed = savedProfil.transform();
        res.status(httpStatus.CREATED);
        return res.json(ProfilTransformed);
    }catch(error){
        return error;
    }
}
exports.editcompanyprofil = async (req, res, next) => {
  	try{
      const id = req.params.id;
      const companyName = req.body.nama_perusahaan;
      const email = req.body.email;
      const profil = req.body.profil;
      const peraturan = req.body.peraturan;
  		company.findOneAndUpdate({_id:id},{"$set" : {"nama_perusahaan" : companyName, "email" : email, "profil" : profil, "peraturan":peraturan}}, function(err, thecompany){
        if(err){
          res.message(err);
          cosole.log(err);
        }else {
          company.findOne({_id:id}, function(err,thecmpany){
            const status = httpStatus.CREATED;
            res.json(status, thecmpany);
          });
        }
      });
    }catch(error){
        return error;
    }
}
exports.getcompanyprofil = async (req, res, next) => {
  	try{
  		company.find(function(err, company){
        if(err){
          res.send(err);
          console.log(err);
        }else {
          const status = httpStatus.CREATED;
          return res.json(status,company);
        }
      });
    }catch(error){
        return error;
    }
}
exports.deletecompanyprofil = async (req, res, next) => {
  	try{
      const id = req.params.id;
  		company.remove({_id:id}, function(err, deleted){
        if(err){
          console.log(err);
          res.send(err);
        }else {
          res.status(httpStatus.NO_CONTENT).end();
        }
      })
    }catch(error){
        return error;
    }
}
