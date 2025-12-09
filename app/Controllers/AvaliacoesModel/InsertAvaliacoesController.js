import AvaliacoesModel from "../../Models/AvaliacoesModel.js";

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const materia = requestBody.materia;
    const id_turma = requestBody.turma;
    const vencimento = requestBody.vencimento;

    if (materia === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }

    try {
        const row = await AvaliacoesModel.create({
            materia: materia,
            id_turma: id_turma,
            vencimento: vencimento
        })
        
        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);
                 
    } catch (error) {
        
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
        
    }
}