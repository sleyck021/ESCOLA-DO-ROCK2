import { Router } from 'express';
import ListProfessorController from '../../app/Controllers/ProfessoresModel/ListProfessoresController.js';
import InsertProfessorController from '../../app/Controllers/ProfessoresModel/InsertProfessoresController.js';
import GetProfessorController from '../../app/Controllers/ProfessoresModel/GetProfessoresController.js';
import DeleteProfessorController from '../../app/Controllers/ProfessoresModel/DeleteProfessoresController.js';
import UpdateProfessorController from '../../app/Controllers/ProfessoresModel/UpdateProfessoresController.js';

export default (function () {

    const router = Router();

    router.get('/api/professores', ListProfessorController);

    router.get('/api/professores/:id', GetProfessorController);

    router.post('/api/professores', InsertProfessorController);

    router.delete('/api/professores/:id', DeleteProfessorController);

    router.put('/api/professores/:id', UpdateProfessorController);

    return router;

})();