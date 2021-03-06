const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getByUserName/:username').get((req, res) => {
  User.findOne({username:req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getAdmins').get((req, res) => {
  User.find({discriminator:"admin"})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/getLivreurs').get((req, res) => {
  User.find({discriminator:"livreur"})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getClients').get((req, res) => {
  User.find({discriminator:"Client"})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getByUserNamePassword/:username/:password').get((req, res) => {
  User.findOne({username:req.params.username})
  .findOne({password:req.params.password})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const dateNaissance = Date.parse(req.body.dateNaissance);
  const discriminator = req.body.discriminator;
  const password = req.body.password;
  const adresse = req.body.adresse;
  const mail = req.body.mail;


  const newUser = new User({
    username,
    nom,
    prenom,
    dateNaissance,
    discriminator,
    password,
    adresse,
    mail,
  });

  newUser.save()
  .then(() => res.json(typeof newUser._id))
  .catch(err => res.status(400).json('Error: ' + err));
  
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteall/').delete((req, res) => {
  User.remove()
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateDateSuppression').post((req, res) => {
  User.findOne({username:req.body.username})
    .then(user => {
      user.username = req.body.username;
      user.nom = req.body.nom;
      user.prenom = req.body.prenom;
      user.dateNaissance = Date.parse(req.body.dateNaissance);
      user.discriminator = req.body.discriminator;
      user.password = req.body.password;
      user.adresse = req.body.adresse;
      user.mail = req.body.mail;
      user.date_suppression=req.body.date_suppression;
      

      

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:username').post((req, res) => {
  User.findOne({username:req.params.username})
    .then(user => {
      user.username = req.body.username;
      user.nom = req.body.nom;
      user.prenom = req.body.prenom;
      user.dateNaissance = Date.parse(req.body.dateNaissance);
      user.discriminator = req.body.discriminator;
      user.password = req.body.password;
      user.adresse = req.body.adresse;
      user.mail = req.body.mail;

 
      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;