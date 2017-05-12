/**
 * Created by crist on 11/05/2017.
 */
const db = require('../../config/database');

const api = {}

api.adiciona = (req, res) => {
  const foto = req.body;
  delete foto._id;
  db.insert(foto, (err, newDoc) => {
    if (err) return console.log(err);
    console.log('Adicionado com sucesso: ' + newDoc._id);
    res.json(newDoc._id);
  });
};

api.busca = (req, res) => {
  db.findOne({_id: req.params.fotoId}, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.atualiza = (req, res) => {
  console.log('Parâmetro recebido:' + req.params.fotoId);
  db.update({_id: req.params.fotoId}, req.body, (err, numReplaced) => {
    if (err) return console.log(err);
    if (numReplaced) res.status(200).end();
    res.status(500).end();
    console.log('Atualizado com sucesso: ' + req.body._id);
    res.status(200).end();
  });
};

api.lista = (req, res) => {
  db.find({}).sort({titulo: 1}).exec((err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.listaPorGrupo = (req, res) => {
  var grupoId = parseInt(req.params.grupoId);
  db.find({grupo: grupoId}, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });

};

api.remove = (req, res) => {

  db.remove({_id: req.params.fotoId}, {}, (err, numRemoved) => {
    if (err) return console.log(err);
    console.log('removido com sucesso');
    if (numRemoved) res.status(200).end();
    res.status(500).end();
  });
};

api.listaGrupos = (req, res) => {

  res.json([
    {
      _id: 1,
      nome: 'esporte'
    },
    {
      _id: 2,
      nome: 'lugares',
    },
    {
      _id: 3,
      nome: 'animais'
    }
  ]);

};


module.exports = api;