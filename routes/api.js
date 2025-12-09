import { Router } from 'express';

import alunosApi from './api/alunosApi.js';
import turmasApi from './api/turmasApi.js';
import professoresApi from './api/professoresApi.js';
import aulasApi from './api/aulasApi.js';
import presencasApi from './api/presencasApi.js';
import avaliacoesApi from './api/avaliacoesApi.js';
import notasApi from './api/notasApi.js';

export default (function () {

    const router = Router();

    router.use('/', alunosApi);
    router.use('/', turmasApi);
    router.use('/', professoresApi);
    router.use('/', aulasApi);
    router.use('/', presencasApi);
    router.use('/', avaliacoesApi);
    router.use('/', notasApi)

    return router;

})();