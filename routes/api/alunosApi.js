import { Router } from 'express';
import ListAlunoController from '../../app/Controllers/AlunosModel/ListAlunosController.js';
import GetAlunoController from '../../app/Controllers/AlunosModel/GetAlunosController.js';
import InsertAlunoController from '../../app/Controllers/AlunosModel/InsertAlunosController.js';
import DeleteAlunoController from '../../app/Controllers/AlunosModel/DeleteAlunosController.js';
import UpdateAlunoController from '../../app/Controllers/AlunosModel/UpdateAlunosController.js';

export default (function () {

    const router = Router();

    router.get('/api/alunos', ListAlunoController);

    router.get('/api/alunos/:id', GetAlunoController)

    router.post('/api/alunos', InsertAlunoController)

    router.delete('/api/alunos/:id', DeleteAlunoController)

    router.put('/api/alunos/:id', UpdateAlunoController)

    return router;
    
})();