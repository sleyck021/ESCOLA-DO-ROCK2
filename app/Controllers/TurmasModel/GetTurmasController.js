import AlunosModel from "../../Models/AlunosModel.js";
import ProfessoresModel from "../../Models/ProfessoresModel.js";
import TurmaModel from "../../Models/TurmasModel.js";

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_turma = request.params.id;

    const count = request.query.count

    try {

        const row = await TurmaModel.findByPk(id_turma, {
            include: [
                {
                    model: ProfessoresModel,
                    as: "professores"
                },
                {
                    model: AlunosModel,
                    as: "alunos"
                }
            ]
        });
        
        let obj

        if (count == "y") {
            obj = {
                id_turma: row.id_turma,
                id_professor: row.id_professor,
                professores: row.professores,
                Número_de_alunos: row.alunos.length
            }
        } else {
            obj = row
        }

        if(obj === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Turma com id ${id} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(obj);
    } catch(error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }
}