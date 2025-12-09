import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import TurmaModel from './TurmasModel.js';

export default (function () {

    return sequelize.define(
        "alunos",
        {
            id_aluno: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome_aluno: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_turma: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "alunos",
            timestamps: false
        }
    );

})();
