import PresencasModel from "../../Models/PresencasModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_presenca = request.params.id;

    const id_aluno = requestBody.aluno;
    const id_aula = requestBody.aula;
    const presenca = (requestBody.presenca === "true");

    const data = {}

    if (id_aluno !== undefined) {
        data["id_aluno"] = id_aluno;
    }

    if (id_aula !== undefined) {
        data["id_aula"] = id_aula;
    }

    if (presenca !== undefined) {
        data["presenca"] = presenca;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_presenca}`
        });
    }

    //try {

        const [rowsAffected, [row]] = await PresencasModel.update(
            {
                id_aluno: id_aluno,
                id_aula: id_aula,
                presenca: presenca
            },
            {
                where: {
                    id_presenca: id_presenca
                },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum aluno encontrado com ID ${id_presenca}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    //} catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    //}
}