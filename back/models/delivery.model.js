const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
 
  reference_commande: {type: String,required: true},
  datelivraison: {type: Date,required: true},
  isvalid: {type: Boolean},
  etat: {type: String,required: true, default: "enregistrementcommande "},
  adresse: {type: String},
  prix_initial: {type: Number},
  prix_total:{type:Number},
  code_validation: {type: String,required: false},
  type_livraison: {type: String,required: true,default:"normal"},

}, {
  timestamps: true,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;