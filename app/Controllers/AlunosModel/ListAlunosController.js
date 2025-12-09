import TurmaModel from "../../Models/TurmasModel.js";
import AlunoModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    var cond = {}

    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;
    const nome = request.query.nome
    const turma = parseInt(request.query.turma) || 0;

    if (turma !== 0) {
        cond["id_turma"] = turma
    }

    if (nome !== "") {
        cond["nome_aluno"] = nome
    }

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    //try {

        const alunoscomturma = await AlunoModel.findAll({
            limit: limit + 1,
            offset: offset,
            order: [["id_aluno", "asc"]],
            include: [
                {
                    model: TurmaModel,
                    as: "turmas"
                }
            ],
            where: cond
        });

        const hasMore = (alunoscomturma.length > limit);

        const rows = (hasMore) ? (alunoscomturma.slice(0, limit)) : (alunoscomturma);
        const next = (hasMore) ? (offset + limit) : (null);

        return response.status(HTTP_STATUS.SUCCESS).json({
            rows: rows,
            limit: limit,
            next: next
        });

    //}catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' })
    //}
};
