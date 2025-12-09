import NotasModel from "../../Models/NotasModel.js"

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const id_avaliacao = requestBody.avaliacao || null;
    const id_aluno = requestBody.aluno || null;
    const nota = requestBody.nota || null;

    /*if (nome === null || id_turma === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" ou "turma" não preenchido.' });
    }*/

    try {

        const row = await NotasModel.create({
            id_avaliacao: id_avaliacao,
            id_aluno: id_aluno,
            nota: nota
        })

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}