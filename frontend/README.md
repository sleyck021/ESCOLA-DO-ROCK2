ESCOLA DO ROCK 2 — Frontend
1. Objetivo desta etapa

O objetivo desta etapa do projeto é implementar o front-end do sistema Escola do Rock, utilizando React + TypeScript, consumindo a API REST desenvolvida anteriormente. Nesta fase, foram implementadas views de CRUD para as entidades Alunos e Turmas, além da integração com WebSocket para atualizações em tempo real.

2. Tecnologias utilizadas

React 18

TypeScript

Vite (pré-compilador)

Axios (consumo da API REST)

React Router DOM (rotas)

WebSocket (atualizações em tempo real)

3. Estrutura do projeto
frontend/
├─ src/
│  ├─ hooks/
│  │  └─ useWebSocket.ts         # Hook customizado para WebSocket
│  ├─ pages/
│  │  ├─ Alunos/
│  │  │  ├─ ListarAlunos.tsx
│  │  │  ├─ CriarAluno.tsx
│  │  │  └─ EditarAluno.tsx
│  │  ├─ Turmas/
│  │  │  ├─ ListarTurmas.tsx
│  │  │  ├─ CriarTurma.tsx
│  │  │  └─ EditarTurma.tsx
│  ├─ services/
│  │  └─ api.ts                  # Configuração Axios
│  ├─ types/
│  │  ├─ Aluno.ts
│  │  └─ Turma.ts
│  ├─ routes.tsx
│  └─ App.tsx
├─ package.json
└─ vite.config.ts

4. Entidades CRUD implementadas

Aluno

id: number

nome: string

email: string

turmaId: number

Turma

id: number

nome: string

professor: string

5. Consumo da API

Todas as requisições são feitas via Axios. Exemplos de rotas utilizadas:

Alunos

GET /alunos → Listar todos os alunos

POST /alunos → Criar novo aluno

GET /alunos/:id → Buscar aluno por ID

PUT /alunos/:id → Editar aluno

DELETE /alunos/:id → Deletar aluno

Turmas

GET /turmas → Listar todas as turmas

POST /turmas → Criar nova turma

GET /turmas/:id → Buscar turma por ID

PUT /turmas/:id → Editar turma

DELETE /turmas/:id → Deletar turma

6. WebSocket

Foi implementado um hook customizado (useWebSocket) para gerenciar o cliente WebSocket em React.

URL de conexão: ws://localhost:8080

O hook retorna:

messages: array com mensagens recebidas em tempo real

sendMessage(msg: string): função para enviar mensagem

Exemplo de uso:

const { messages, sendMessage } = useWebSocket('ws://localhost:8080');


No projeto, o WebSocket é usado para atualizar automaticamente as listas de Alunos e Turmas sempre que uma alteração (criação, edição ou exclusão) acontece.

7. Como executar
7.1 Instalar dependências
npm install

7.2 Executar em modo desenvolvimento
npm run dev


O Vite abrirá o front-end em: http://localhost:5173/

7.3 Build para produção
npm run build


Os arquivos gerados ficam em dist/.