import AlunoModel from "../../Models/AlunosModel.js";

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id_aluno = request.params.id;

    const nome_aluno = requestBody.nome;
    const id_turma = requestBody.turma;

    const data = {}

    if (nome_aluno !== undefined) {
        data["nome"] = nome_aluno;
    }

    if (id_turma !== undefined) {
        data["turma"] = id_turma;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_aluno}`
        });
    }

    try {

        const [rowsAffected, [row]] = await AlunoModel.update(
            {
                nome_aluno: nome_aluno,
                id_turma: id_turma
            },
            {
                where: {
                    id_aluno: id_aluno
                },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum aluno encontrado com ID ${id_aluno}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}