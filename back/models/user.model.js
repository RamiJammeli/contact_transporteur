const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String,required: true,unique: true, trim: true, minlength: 5},
  nom: {type: String,required: true, minlength: 2},
  prenom: {type: String,required: true, minlength: 2},
  dateNaissance: {type: Date,required: false},
  discriminator: {type: String, default:'Client'},
  password: {type: String,required: true, minlength: 6},
  date_suppression: {type: Date,required: false,default: null},
  adresse: {type: String},
  mail: {type: String},
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;