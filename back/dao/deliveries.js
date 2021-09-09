const router = require('express').Router();
let Delivery = require('../models/delivery.model');





  router.route('/add').post((req, res) => {
    console.log("aa"+ req.body.prix_initial)
    const reference_commande = req.body.reference_commande;
    const datelivraison = Date.parse(req.body.datelivraison);
    const isvalid = req.body.isvalid;
    const etat = req.body.etat;
    const prix_initial = Number.parseFloat(req.body.prix_initial);
    const prix_total = Number.parseFloat(req.body.prix_total);
    const adresse = req.body.adresse;
    const code_validation=req.body.code_validation;
    const type_livraison=req.body.type_livraison;
  
    const newDelivery = new Delivery({
      reference_commande,
      datelivraison,
      isvalid,
      etat,
      prix_initial,
      prix_total,
      adresse,
      code_validation,
      type_livraison,
    });
  
    newDelivery.save()
    .then(() => res.json(newDelivery))
    .catch(err => res.status(400).json('Error: ' + err));
    
  });


  router.route('/').get((req, res) => {
    Delivery.find()
      .then(d => res.json(d))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Delivery.findById(req.params.id)
      .then(delivery => res.json(delivery))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/s/:etat').get((req, res) => {
    Delivery.find({etat:req.params.etat})
      .then(delivery => res.json(delivery))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
      .then(() => res.json('Delivery deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/update').post((req, res) => {
    Delivery.findOne({_id:req.body._id})
      .then(delivery => {
        delivery.reference_commande = req.body.reference_commande;
        delivery.adresse = req.body.adresse;
        delivery.prix_initial = req.body.prix_initial;
        delivery.datelivraison = Date.parse(req.body.datelivraison);
        delivery.prix_total = req.body.prix_total;
        delivery.type_livraison = req.body.type_livraison;
        
  
   
        delivery.save()
          .then(() => res.json('Delivery updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  module.exports = router;