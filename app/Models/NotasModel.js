import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import TurmaModel from './TurmasModel.js';
import AlunosModel from './AlunosModel.js';
import AvaliacoesModel from './AvaliacoesModel.js';

export default (function () {

    return sequelize.define(
        "notas",
        {
            id_nota: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            id_avaliacao: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_aluno: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            nota: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "notas",
            timestamps: false
        }
    );

})();
