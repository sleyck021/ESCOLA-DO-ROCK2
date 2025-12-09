import AulasModel from "../../Models/AulasModel.js"

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const id_turma = requestBody.turma || null;

    if (id_turma === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "turma" não preenchido.' });
    }

    try {

        const row = await AulasModel.create({
            id_turma: id_turma
        })

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}