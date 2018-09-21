const Joi = require('joi');
const cuti = require('../models/cuti');

module.exports = {

  // POST /v1/cuti/ajukanCuti
  ajukanCuti: {
    body: {
      email: Joi.string().email().required(),
      nama: Joi.string().max(100),
      awal_cuti: Joi.date(),
      akhir_cuti: Joi.date(),
      keterangan : Joi.string(),
    },
  },

  // GET /v1/cuti/getAllCuti
  getAllCuti: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      nama: Joi.string(),
      email: Joi.string(),
    },
  },

  // GET /v1/cuti/:email
  getOneCuti: {
    params: {
      email: Joi.string().email().required(),
    },
  },

  // PUT /v1/cuti/accCuti:id
  accCuti: {
    params: {
      id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
 // PUT /v1/cuti/tolakCuti:id
  tolakCuti: {
    params: {
      id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

  // GET /v1/cuti/findByStatus/:status
  findByStatus: {
    params: {
      status: Joi.boolean().required(),
    },
  },

  // GET /v1/cuti/findByEmail/:email
  findByEmail: {
    params: {
      email: Joi.string().email().required(),
    },
  },

  // DELETE /v1/cuti/deleteCUti/:id
  deleteCuti: {
    params: {
      id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
};
