import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const CriarAluno = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [turmaId, setTurmaId] = useState<number>(0);
  const navigate = useNavigate();

  const criar = async () => {
    await api.post('/alunos', { nome, email, turmaId });
    navigate('/alunos');
  };

  return (
    <div>
      <h1>Criar Aluno</h1>
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="number"
        placeholder="ID da Turma"
        value={turmaId}
        onChange={(e) => setTurmaId(Number(e.target.value))}
      />
      <button onClick={criar}>Criar</button>
    </div>
  );
};
