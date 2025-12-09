import TurmasModel from "../../Models/TurmasModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    console.log(request.body)

    const id_professor = requestBody.professor || null;

    if (id_professor === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "professor" não preenchido.' });
    }

    try {

        const row = await TurmasModel.create({
            id_professor: id_professor
        })

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}