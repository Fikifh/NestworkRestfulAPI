const httpStatus = require('http-status');
const { omit } = require('lodash');
const Slip = require('../models/slipGaji');
const { handler: errorHandler } = require('../../middleware/error');


/**
 * Post Present
 * @private
 */
exports.ajukanSlipGaji = async (req, res, next) => {
 	const slip = new Slip(req.body);
   	const savedslip = await slip.save();
        const slipTransformed = savedslip.transform();
        res.status(httpStatus.CREATED);
        return res.json(slipTransformed);
}
exports.getAllSlipGaji = async (req, res) => {
	try{
		Slip.find(function(err, slip){
		if(err){
			res.send(err);
			console.log(err);
		}
		res.json(slip);
	});
	}catch(error){
		return error;
	}
}
exports.getOneSlipGaji = async (req, res) => {
	 try{
     const email = req.params.email;
     Slip.find({email:email}, function(err, slip){
       if(err){
         return err;
       }else {
         const status = httpStatus.CREATED;
         return res.json(status, slip);
       }
     })
   }catch(err){
     return err;
   }
}
exports.updateSlipGaji = async (req, res) => {
  try{
    const id = req.params.id;
    const status = req.body.status;
    const gaji = req.body.gaji;
    const jumlahTask = req.body.jumlahTask;
    Slip.findOneAndUpdate({_id:id}, {"$set" : {"status" : status, "gaji" : gaji, "jumlahTask":jumlahTask}}, function(err, slip){
      if(err){
        res.send(err);
  			console.log(err);
      }else{
        Slip.findOne({_id:id}, function(err, slip){
          if(err){
            return err;
          }else {
            const message = 'updated';
            res.json({'message':message, slip});
          }
        });
      }
    });
  }catch(eror){
    return eror;
  }
}
exports.deleteSlipGajiUseId = async (req, res) =>{
  try {
    const id = req.params.id;
    Slip.remove({_id:id}, function(err, slip){
      if(err){
        res.json({message:'data not found!'});
        console.log(err);
      }else {
        const status = httpStatus.OK;
        res.json(status, {message:'Deleted'});
      }
    });
  } catch (e) {
    return err;
  }
}
