import { Router } from 'express'
import ListAulasController from '../../app/Controllers/AulasModel/ListAulasController.js'
import GetAulasController from '../../app/Controllers/AulasModel/GetAulasController.js';
import InsertAulasController from '../../app/Controllers/AulasModel/InsertAulasController.js';
import DeleteAulasController from '../../app/Controllers/AulasModel/DeleteAulasController.js';
import UpdateAulasController from '../../app/Controllers/AulasModel/UpdateAulasController.js';

export default (function () {

    const router = Router();

    router.get('/api/aulas', ListAulasController)

    router.get('/api/aulas/:id', GetAulasController)

    router.post('/api/aulas', InsertAulasController)

    router.delete('/api/aulas/:id', DeleteAulasController)

    router.put('/api/aulas/:id', UpdateAulasController)

    return router;

})();