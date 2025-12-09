import NotasModel from "../../Models/NotasModel.js";

export default async(request, response) => {
    
    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_nota = request.params.id;

    try{
        const row = await NotasModel.findByPk(id_nota);
        
        if(row === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Nota com id ${id_nota} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}