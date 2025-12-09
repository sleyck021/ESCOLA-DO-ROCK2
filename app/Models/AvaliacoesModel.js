import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import TurmaModel from './TurmasModel.js';

export default (function () {

    return sequelize.define(
        "avaliacoes",
        {
            id_avaliacao: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            materia: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_turma: {
                type: DataTypes.INTEGER,
                allowNull: false
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
            },
            vencimento: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: "avaliacoes",
            timestamps: true,
            createdAt: "criado_em",
            updatedAt: "atualizado_em"
        }
    );

})();
