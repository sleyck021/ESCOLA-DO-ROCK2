import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import type { Turma } from '../../types/Turma';

export const EditarTurma = () => {
  const { id } = useParams();
  const [turma, setTurma] = useState<Turma | null>(null);
  const navigate = useNavigate();

  const fetchTurma = async () => {
    const response = await api.get<Turma>(`/turmas/${id}`);
    setTurma(response.data);
  };

  const salvar = async () => {
    if (!turma) return;
    await api.put(`/turmas/${id}`, turma);
    navigate('/turmas');
  };

  useEffect(() => {
    fetchTurma();
  }, [id]);

  if (!turma) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Editar Turma</h1>
      <input value={turma.nome} onChange={(e) => setTurma({ ...turma, nome: e.target.value })} />
      <input
        value={turma.professor}
        onChange={(e) => setTurma({ ...turma, professor: e.target.value })}
      />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
};
