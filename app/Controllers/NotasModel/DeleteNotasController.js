import NotasModel from "../../Models/NotasModel.js"

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_nota = request.params.id;

    try {

        const rowsDeleted = await NotasModel.destroy({
            where: {
                id_nota: id_nota
            }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Nota com id ${id_nota} não existe!` });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {

        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }

};