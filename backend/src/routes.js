const express = require('express');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');


const connection = require('./database/conection');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;













// Sempre recebe os dois parâmetros
// routes.post('/users', (request, response) => {
//     // const params = request.query;
//     // const params = request.params;
//     const params = request.body;
//     console.log(params);

//     // return response.send('Hello World');
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Laryssa Oliveira'
//     })
// });