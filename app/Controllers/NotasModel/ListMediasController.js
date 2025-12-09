import { Sequelize } from 'sequelize';
import NotasModel from "../../Models/NotasModel.js"
import AvaliacoesModel from '../../Models/AvaliacoesModel.js';
import AlunosModel from '../../Models/AlunosModel.js';

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;

     if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    //try {
    
            const data = await AlunosModel.findAll({
                limit: limit + 1,
                offset: offset,
                order: [["id_aluno", "asc"]],
                attributes: [
                    "id_aluno",
                    "nome_aluno"
                ],
                include: [
                    {
                        model: NotasModel,
                        as: "notas",
                        attributes: [
                            "nota"
                        ],
                        include: [
                            {
                                model: AvaliacoesModel,
                                as: "avaliacoes",
                                attributes: [
                                    "materia"
                                ]
                            }
                        ]
                    }
                ]
            });
    
            const hasMore = (data.length > limit);
    
            const rows = (hasMore) ? (data.slice(0, limit)) : (data);
            const next = (hasMore) ? (offset + limit) : (null);
            
            let x = []

            rows.forEach(function(rows) {
                
                let medias = {}
                let n = {}
                
                rows["notas"].forEach(function(rows, i) {
                    let materia = rows["avaliacoes"]["materia"]
                    medias[materia] = (medias[materia] || 0) + rows["nota"]
                    n[materia] = (n[materia] || 0) + 1
                })

                Object.keys(medias).forEach(key => {
                    medias[key] = medias[key] / n[key]
                })

                let obj = {
                    id_aluno: rows["id_aluno"],
                    nome_aluno: rows["nome_aluno"],
                    medias: medias
                }
                x.push(obj)
            })

            return response.status(HTTP_STATUS.SUCCESS).json({
                rows: x,
                limit: limit,
                next: next
            });
    
        //} catch (error) {
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'VAI SE FUDER' })
        //}
};