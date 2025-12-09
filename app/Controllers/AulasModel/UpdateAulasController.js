import AulasModel from "../../Models/AulasModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_aula = request.params.id;

    const id_turma = requestBody.turma;

    const data = {}

    if (id_turma !== undefined) {
        data["id_turma"] = id_turma;
    }

     if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_aula}`
        });
    }

    //try {

        const [rowsAffected, [row]] = await AulasModel.update(
            {
                id_turma: id_turma
            },
            {
                where: {
                    id_aula: id_aula
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