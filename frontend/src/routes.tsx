import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ListarAlunos } from './pages/Alunos/ListarAlunos';
import { CriarAluno } from './pages/Alunos/CriarAluno';
import { EditarAluno } from './pages/Alunos/EditarAluno';
import { ListarTurmas } from './pages/Turmas/ListarTurmas';
import { CriarTurma } from './pages/Turmas/CriarTurma';
import { EditarTurma } from './pages/Turmas/EditarTurma';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/alunos" />} />

        <Route path="/alunos" element={<ListarAlunos />} />
        <Route path="/alunos/criar" element={<CriarAluno />} />
        <Route path="/alunos/editar/:id" element={<EditarAluno />} />

        <Route path="/turmas" element={<ListarTurmas />} />
        <Route path="/turmas/criar" element={<CriarTurma />} />
        <Route path="/turmas/editar/:id" element={<EditarTurma />} />
      </Routes>
    </BrowserRouter>
  );
};
