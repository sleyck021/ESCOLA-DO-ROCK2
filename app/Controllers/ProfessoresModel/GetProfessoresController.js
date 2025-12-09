import ProfessoresModel from "../../Models/ProfessoresModel.js";

export default async(request, response) => {
    
    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_professor = request.params.id;

    try{
        const row = await ProfessoresModel.findByPk(id_professor);
        
        if(row === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Professor com id ${id_professor} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}