import AvaliacoesModel from "../../Models/AvaliacoesModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_avaliacao = request.params.id;

    const materia = requestBody.materia;
    const id_turma = requestBody.turma;
    const vencimento = requestBody.vencimento;

    const data = {}

    if (id_avaliacao !== undefined) {
        data["materia"] = materia;
    }

    if (id_turma !== undefined) {
        data["id_turma"] = id_turma;
    }

    if (vencimento !== undefined) {
        data["vencimento"] = vencimento;
    }

     if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_avaliacao}`
        });
    }

    //try {

        const [rowsAffected, [row]] = await AvaliacoesModel.update(
            {
                materia: materia,
                id_turma: id_turma,
                vencimento: vencimento
            },
            {
                where: {
                    id_avaliacao: id_avaliacao
                },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum aluno encontrado com ID ${id_avaliacao}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    //} catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    //}
}