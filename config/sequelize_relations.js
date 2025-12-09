import AlunosModel from "../app/Models/AlunosModel.js";
import ProfessoresModel from "../app/Models/ProfessoresModel.js";
import AulasModel from "../app/Models/AulasModel.js";
import TurmasModel from "../app/Models/TurmasModel.js";
import PresencasModel from "../app/Models/PresencasModel.js";
import AvaliacoesModel from "../app/Models/AvaliacoesModel.js";
import NotasModel from "../app/Models/NotasModel.js"

AlunosModel.belongsTo(TurmasModel, {
   foreignKey: 'id_turma',
   as: 'turmas'
});

AlunosModel.hasMany(NotasModel, {
   foreignKey: 'id_aluno',
   as: 'notas'
})

TurmasModel.hasMany(AlunosModel, {
   foreignKey: 'id_turma',
   as: 'alunos'
})

TurmasModel.belongsTo(ProfessoresModel, {
   foreignKey: 'id_professor',
   as: 'professores'
});

AulasModel.belongsTo(TurmasModel, {
   foreignKey: 'id_turma',
   as: 'turmas'
});

PresencasModel.belongsTo(AulasModel, {
   foreignKey: 'id_aula',
   as: 'aulas'
})

AvaliacoesModel.belongsTo(TurmasModel, {
   foreignKey: 'id_turma',
   as: 'turmas'
})

NotasModel.belongsTo(AvaliacoesModel, {
   foreignKey: 'id_avaliacao',
   as: "avaliacoes"
})