import AvaliacoesModel from "../../Models/AvaliacoesModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_avaliacao = request.params.id;

    try {

        const rowsDeleted = await AvaliacoesModel.destroy({
            where: {
                id_avaliacao: id_avaliacao
            }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Avaliação com id ${id_avaliacao} não existe!` });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {

        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }

};