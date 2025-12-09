import AlunoModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    //console.log(request.body)

    const nome = requestBody.nome || null;
    const id_turma = requestBody.turma || null;

    if (nome === null || id_turma === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" ou "turma" não preenchido.' });
    }

    try {

        const row = await AlunoModel.create({
            nome_aluno: nome,
            id_turma: id_turma
        })

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}