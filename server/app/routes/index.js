/**
 * Created by crist on 11/05/2017.
 */
const api = require('../api'),
  path = require('path');

module.exports  = app => {

  app.route('/v1/fotos')
    .post(api.adiciona)
    .get(api.lista);

  app.route('/v1/fotos/:fotoId')
    .delete(api.remove)
    .get(api.busca)
    .put(api.atualiza);

  app.get('/v1/grupos', api.listaGrupos);
  app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);

  app.all('/*', (req, res) => res.sendFile(path.join(app.get('clientPath'), 'index.html')));
};