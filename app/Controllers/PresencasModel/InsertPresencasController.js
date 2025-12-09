import PresencasModel from '../../Models/PresencasModel.js';

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const aluno = requestBody.aluno;
    const aula = requestBody.aula;
    const presenca = requestBody.presenca;

    if (aluno === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }

    try {
        const row = await PresencasModel.create({
            id_aluno: aluno,
            id_aula: aula,
            presenca_aluno: presenca
        })
        
        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
                 
    } catch (error) {
        
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
        
    }
}