import { useEffect, useState } from 'react';
import type { Aluno } from '../../types/Aluno';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useWebSocket } from '../../hooks/useWebSocket';

export const ListarAlunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const { messages, sendMessage } = useWebSocket('ws://localhost:8080'); // ajuste a URL do WebSocket

  const fetchAlunos = async () => {
    const response = await api.get<Aluno[]>('/alunos');
    setAlunos(response.data);
  };

  const deletarAluno = async (id: number) => {
    await api.delete(`/alunos/${id}`);
    fetchAlunos();
    sendMessage(`Aluno ${id} deletado`);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      // sempre que receber mensagem via WebSocket, atualiza a lista
      fetchAlunos();
    }
  }, [messages]);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <Link to="/alunos/criar">Criar Aluno</Link>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} ({aluno.email}) - Turma {aluno.turmaId}
            <Link to={`/alunos/editar/${aluno.id}`}>Editar</Link>
            <button onClick={() => deletarAluno(aluno.id)}>Deletar</button>
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
