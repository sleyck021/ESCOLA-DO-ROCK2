import { Router } from 'express'
import ListNotasController from '../../app/Controllers/NotasModel/ListNotasController.js';
import GetNotasController from '../../app/Controllers/NotasModel/GetNotasController.js';
import InsertNotasController from '../../app/Controllers/NotasModel/InsertNotasController.js';
import DeleteNotasController from '../../app/Controllers/NotasModel/DeleteNotasController.js';
import UpdateNotasController from '../../app/Controllers/NotasModel/UpdateNotasController.js';
import ListMediasController from '../../app/Controllers/NotasModel/ListMediasController.js';

export default (function () {

    const router = Router();

    router.get('/api/notas', ListNotasController)

    router.get('/api/medias', ListMediasController)

    router.get('/api/notas/:id', GetNotasController)

    router.post('/api/notas', InsertNotasController)

    router.delete('/api/notas/:id', DeleteNotasController)

    router.put('/api/notas/:id', UpdateNotasController)

    return router;

})();