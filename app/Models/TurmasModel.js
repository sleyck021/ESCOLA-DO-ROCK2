import sequelize from "../../config/sequelize.js";
import { DataTypes } from 'sequelize';
import ProfessoresModel from "./ProfessoresModel.js";
import AlunosModel from "./AlunosModel.js";

export default (function () {

    return sequelize.define(
        "turmas",
        {
            id_turma: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            id_professor: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "turmas",
            timestamps: false
        }
    );

})();