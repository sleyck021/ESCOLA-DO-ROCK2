import { Router } from 'express'
import ListAvaliacoesModel from '../../app/Controllers/AvaliacoesModel/ListAvaliacoesController.js';
import GetAvaliacoesController from '../../app/Controllers/AvaliacoesModel/GetAvaliacoesController.js';
import InsertAvaliacoesController from '../../app/Controllers/AvaliacoesModel/InsertAvaliacoesController.js';
import DeleteAvaliacoesController from '../../app/Controllers/AvaliacoesModel/DeleteAvaliacoesController.js';
import UpdateAvaliacoesController from '../../app/Controllers/AvaliacoesModel/UpdateAvaliacoesController.js';

export default (function () {

    const router = Router();

    router.get('/api/avaliacoes', ListAvaliacoesModel)

    router.get('/api/avaliacoes/:id', GetAvaliacoesController)

    router.post('/api/avaliacoes', InsertAvaliacoesController)

    router.delete('/api/avaliacoes/:id', DeleteAvaliacoesController)

    router.put('/api/avaliacoes/:id', UpdateAvaliacoesController)

    return router;

})();