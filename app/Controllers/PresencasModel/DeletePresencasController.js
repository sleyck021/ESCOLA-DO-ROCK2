import PresencasModel from "../../Models/PresencasModel.js"

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_presenca = request.params.id;

    try {

        const rowsDeleted = await PresencasModel.destroy({
            where: {
                id_presenca: id_presenca
            }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Presença com id ${id_presenca} não existe!` });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {

        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }

};