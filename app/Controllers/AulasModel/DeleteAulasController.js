import AulasModel from "../../Models/AulasModel.js"

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_aula = request.params.id;

    try {

        const rowsDeleted = await AulasModel.destroy({
            where: {
                id_aula: id_aula
            }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Aula com id ${id_aula} não existe!` });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {

        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }

};