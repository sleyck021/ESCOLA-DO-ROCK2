import { Router } from 'express'
import ListPresencasController from '../../app/Controllers/PresencasModel/ListPresencasController.js'
import InsertPresencasController from '../../app/Controllers/PresencasModel/InsertPresencasController.js';
import GetPresencasController from '../../app/Controllers/PresencasModel/GetPresencasController.js';
import DeletePresencasController from '../../app/Controllers/PresencasModel/DeletePresencasController.js';
import UpdatePresencasController from '../../app/Controllers/PresencasModel/UpdatePresencasController.js';

export default (function () {

    const router = Router();

    router.get('/api/presencas', ListPresencasController);

    router.get('/api/presencas/:id', GetPresencasController);

    router.post('/api/presencas', InsertPresencasController);

    router.delete('/api/presencas/:id', DeletePresencasController)

    router.put('/api/presencas/:id', UpdatePresencasController)

    return router;

})();