import { Sequelize } from 'sequelize';

import ProfessoresModel from "../../Models/ProfessoresModel.js";
import TurmasModel from "../../Models/TurmasModel.js";
import AlunosModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const cond = {}

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;
    const professor = parseInt(request.query.professor) || 0;
    const count = request.query.count

    if (professor > 0) {
        cond["id_professor"] = professor
    }

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    try {
    
            const data = await TurmasModel.findAll({
                limit: limit + 1,
                offset: offset,
                order: [["id_turma", "asc"]],
                include: [
                    {
                        model: ProfessoresModel,
                        as: "professores"
                    },
                    {
                        model: AlunosModel,
                        as: "alunos"
                    }
                ],
                where: cond
            });
    
            const hasMore = (data.length > limit);
    
            const rows = (hasMore) ? (data.slice(0, limit)) : (data);
            const next = (hasMore) ? (offset + limit) : (null);
    
            let x = [];

            if (count == "y") {
                rows.forEach(function(rows) {

                    var obj = {
                        id_turma: rows.id_turma,
                        id_professor: rows.id_professor,
                        professores: rows.professores,
                        Número_de_alunos: rows.alunos.length
                    }
               
                x.push(obj);
                })
            } else {
                x = rows
            }
            

            return response.status(HTTP_STATUS.SUCCESS).json({
                rows: x,
                limit: limit,
                next: next
            });
    
        } catch (error) {
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' })
        }
};