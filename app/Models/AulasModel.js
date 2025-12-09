import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import TurmaModel from './TurmasModel.js';

export default (function () {

    return sequelize.define(
        "aulas",
        {
            id_aula: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            id_turma: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_aula: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            criado_em: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            atualizado_em: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: "aulas",
            timestamps: true,
            createdAt: "criado_em",
            updatedAt: "atualizado_em"
        }
    );
})();
