import NotasModel from "../../Models/NotasModel.js"

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_nota = request.params.id;

    const id_avaliacao = requestBody.avaliacao || null;
    const id_aluno = requestBody.aluno || null;
    const nota = requestBody.nota || null;

    const data = {}

    if (id_avaliacao !== undefined) {
        data["id_avaliacao"] = id_avaliacao;
    }

    if (id_aluno !== undefined) {
        data["id_aluno"] = id_aluno;
    }

    if (nota !== undefined) {
        data["nota"] = nota;
    }

     if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_nota}`
        });
    }

    //try {

        const [rowsAffected, [row]] = await NotasModel.update(
            {
                id_avaliacao: id_avaliacao,
                id_aluno: id_aluno,
                nota: nota
            },
            {
                where: {
                    id_nota: id_nota
                },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum aluno encontrado com ID ${id_nota}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    //} catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    //}
}