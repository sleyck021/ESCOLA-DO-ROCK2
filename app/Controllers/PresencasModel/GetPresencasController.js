import PresencasModel from "../../Models/PresencasModel.js";

export default async(request, response) => {
    
    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_presenca = request.params.id;

    try{
        const row = await PresencasModel.findByPk(id_presenca);
        
        if(row === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Presença com id ${id_presenca} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}