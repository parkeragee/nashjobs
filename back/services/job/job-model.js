'use strict';

// job-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: false },
  status: { type: String, required: false, enum: ['open', 'closed'], default: 'open' },
  verified: { type: Boolean, required: true, 'default': false},
  link: { type: String, required: false, 'default': '' },
  addedBy: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const jobModel = mongoose.model('job', jobSchema);

module.exports = jobModel;
