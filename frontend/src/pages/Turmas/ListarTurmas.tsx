import { useEffect, useState } from 'react';
import type { Turma } from '../../types/Turma';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useWebSocket } from '../../hooks/useWebSocket';

export const ListarTurmas = () => {
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const { messages, sendMessage } = useWebSocket('ws://localhost:8080');

  const fetchTurmas = async () => {
    const response = await api.get<Turma[]>('/turmas');
    setTurmas(response.data);
  };

  const deletarTurma = async (id: number) => {
    await api.delete(`/turmas/${id}`);
    fetchTurmas();
    sendMessage(`Turma ${id} deletada`);
  };

  useEffect(() => {
    fetchTurmas();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      fetchTurmas();
    }
  }, [messages]);

  return (
    <div>
      <h1>Lista de Turmas</h1>
      <Link to="/turmas/criar">Criar Turma</Link>
      <ul>
        {turmas.map((turma) => (
          <li key={turma.id}>
            {turma.nome} - Professor: {turma.professor}
            <Link to={`/turmas/editar/${turma.id}`}>Editar</Link>
            <button onClick={() => deletarTurma(turma.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Mensagens WebSocket:</h3>
        <ul>
          {messages.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
