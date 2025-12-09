import ProfessoresModel from "../../Models/ProfessoresModel.js";

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;
    
    const id_professor = request.params.id;

    try {
        const rowsDeleted = await ProfessoresModel.destroy({
            where: {
                id_professor: id_professor
            }
        });
        
        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Professor com id ${id_professor} não existe!` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        
    } catch(error) {
        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }
}