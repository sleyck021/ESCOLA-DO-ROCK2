import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import type { Aluno } from '../../types/Aluno';


export const EditarAluno = () => {
  const { id } = useParams();
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const navigate = useNavigate();

  const fetchAluno = async () => {
    const response = await api.get<Aluno>(`/alunos/${id}`);
    setAluno(response.data);
  };

  const salvar = async () => {
    if (!aluno) return;
    await api.put(`/alunos/${id}`, aluno);
    navigate('/alunos');
  };

  useEffect(() => {
    fetchAluno();
  }, [id]);

  if (!aluno) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Editar Aluno</h1>
      <input
        value={aluno.nome}
        onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
      />
      <input
        value={aluno.email}
        onChange={(e) => setAluno({ ...aluno, email: e.target.value })}
      />
      <input
        type="number"
        value={aluno.turmaId}
        onChange={(e) => setAluno({ ...aluno, turmaId: Number(e.target.value) })}
      />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
};
