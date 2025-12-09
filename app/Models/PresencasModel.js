import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import AulasModel from './AulasModel.js';
import AlunosModel from './AlunosModel.js';

export default (function () {

    return sequelize.define(
        "presencas",
        {
            id_presenca: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            id_aluno: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_aula: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            presenca_aluno: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            tableName: "presencas",
            timestamps: false
        }
    );

})();
