import ProfessoresModel from "../../Models/ProfessoresModel.js";

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_professor = request.params.id;

    const requestBody = request.body;

    const nome_professor = requestBody.nome;

    const data = {}

    if (nome_professor !== undefined) {
        data["nome_professor"] = nome_professor;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id_professor}`
        });
    }
    
    try {
        const [rowsAffected, [row]] = await ProfessoresModel.update(
            {
                nome_professor: nome_professor
            },
            {
                where: {
                    id_professor: id_professor
                },
                returning: true
            }
        );
        
        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum professor encontrado com ID ${id_professor}`
            });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}