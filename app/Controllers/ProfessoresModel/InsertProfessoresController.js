import ProfessorModel from '../../Models/ProfessoresModel.js';

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome = requestBody.nome;

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }

    try {
        const row = await ProfessorModel.create({
            nome_professor: nome,
        })
        
        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
                 
    } catch (error) {
        
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
        
    }
}