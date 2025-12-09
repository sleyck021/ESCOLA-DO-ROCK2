import sequelize from "../../config/sequelize.js";
import { DataTypes } from 'sequelize';

export default (function () {

    return sequelize.define(
        "professores",
        {
            id_professor: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome_professor: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "professores",
            timestamps: false
        }
    );

})();