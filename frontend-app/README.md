ESCOLA-DO-ROCK2 - Frontend

Este é o frontend da aplicação Escola do Rock, desenvolvido com React + TypeScript + Vite. Ele consome a API do backend (Node + Express + Postgres) e oferece uma interface para gerenciar alunos e turmas.

🚀 Como rodar o projeto

1. Instalar dependências

cd frontend-app
npm install

2. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto com:

VITE_API_BASE_URL=http://localhost:8080/api

3. Rodar em modo desenvolvimento

npm run dev

Acesse em: http://localhost:5173

4. Build para produção

npm run build
npm run preview

📦 Estrutura de pastas

frontend-app/
├── src/
│   ├── api/              # Serviços HTTP (Axios)
│   ├── hooks/            # Hooks customizados (WebSocket)
│   ├── pages/Students/   # Páginas de alunos
│   ├── routes/           # React Router
│   ├── types/            # Tipos TypeScript
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada

🔗 Integração com Backend

O frontend consome a API exposta pelo backend em http://localhost:8080/api.

Endpoints principais:

GET /api/students → lista de alunos

POST /api/students → criar aluno

GET /api/classes → lista de turmas

📡 WebSocket

O projeto possui suporte a WebSocket para comunicação em tempo real.

Implementado em src/hooks/useWebSocket.ts

Permite receber mensagens em tempo real do servidor.

👨‍🎓 Entidades

Aluno (Rquelme - 6324064 , Naor - 6324552)

🧪 Testes da API

O projeto inclui um arquivo insomnia.yaml para importar no Insomnia e testar os endpoints do backend.

📖 Documentação extra

Diagramas mer_v2.jpg e dfd_v2.jpg mostram o modelo entidade-relacionamento e o fluxo de dados.

.env.example serve como referência para configuração.

Com isso, o frontend está pronto para rodar, integrado ao backend e preparado para entrega na prova 🎸.