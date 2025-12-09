import TurmasModel from "../../Models/TurmasModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_turma = request.params.id;

    const id_professor = requestBody.professor;

    const data = {}

    if (id_professor !== undefined) {
        data["id_professor"] = id_professor;
    }

     if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_turma}`
        });
    }

    //try {

        const [rowsAffected, [row]] = await TurmasModel.update(
            {
                id_professor: id_professor,
            },
            {
                where: {
                    id_turma: id_turma
                },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum aluno encontrado com ID ${id_professor}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    //} catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    //}
}