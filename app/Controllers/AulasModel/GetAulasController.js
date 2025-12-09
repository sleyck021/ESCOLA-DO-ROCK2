import AulasModel from "../../Models/AulasModel.js";

export default async(request, response) => {
    
    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_aula = request.params.id;

    try{
        const row = await AulasModel.findByPk(id_aula);
        
        if(row === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Aula com id ${id_aula} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}