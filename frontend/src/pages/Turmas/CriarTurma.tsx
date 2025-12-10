import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const CriarTurma = () => {
  const [nome, setNome] = useState('');
  const [professor, setProfessor] = useState('');
  const navigate = useNavigate();

  const criar = async () => {
    await api.post('/turmas', { nome, professor });
    navigate('/turmas');
  };

  return (
    <div>
      <h1>Criar Turma</h1>
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input
        placeholder="Professor"
        value={professor}
        onChange={(e) => setProfessor(e.target.value)}
      />
      <button onClick={criar}>Criar</button>
    </div>
  );
};
