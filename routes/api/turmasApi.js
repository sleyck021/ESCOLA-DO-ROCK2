import { Router } from 'express';
import ListTurmaController from '../../app/Controllers/TurmasModel/ListTurmasController.js';
import GetTurmaController from '../../app/Controllers/TurmasModel/GetTurmasController.js';
import InsertTurmaController from '../../app/Controllers/TurmasModel/InsertTurmasController.js';
import DeleteTurmaController from '../../app/Controllers/TurmasModel/DeleteTurmasController.js';
import UpdateTurmaController from '../../app/Controllers/TurmasModel/UpdateTurmasController.js';

export default (function () {

    const router = Router();

    router.get('/api/turmas', ListTurmaController);

    router.get('/api/turmas/:id', GetTurmaController);

    router.post('/api/turmas', InsertTurmaController);

    router.delete('/api/turmas/:id', DeleteTurmaController);

    router.put('/api/turmas/:id', UpdateTurmaController)

    return router;

})();