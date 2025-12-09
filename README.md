# ESCOLA DO ROCK

Projeto de gerenciamento escolar com Node.js, Express, Sequelize e PostgreSQL, pronto para rodar em ambiente Docker e facilmente editável no Visual Studio Code.

## Funcionalidades

- API RESTful para gerenciamento de alunos, professores, turmas, aulas, presenças, avaliações e notas.
- Integração com banco de dados PostgreSQL via Sequelize.
- Servidor web com Express.
- Servir arquivos estáticos e frontend via NGINX.
- Estrutura modular para fácil manutenção e expansão.
- Pronto para desenvolvimento e depuração no VS Code.

## Estrutura do Projeto

```
.
├── app/                # Controllers e Models
├── bootstrap/          # Inicialização da aplicação
├── config/             # Configurações (DB, Sequelize, Constantes)
├── docker/             # Dockerfiles e configs do NGINX/Postgres
├── public/             # Arquivos estáticos (frontend)
├── routes/             # Rotas da API e web
├── server.js           # Entry point do servidor Express
├── package.json        # Dependências e scripts
├── docker-compose.yml  # Orquestração dos containers
└── README.md           # Este arquivo
```

## Como rodar no VS Code

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/sleyck021/ESCOLA-DO-ROCK.git
   cd ESCOLA-DO-ROCK
   ```

2. **Abra a pasta no VS Code:**

   - No terminal:
     ```sh
     code .
     ```
   - Ou abra manualmente pelo menu do VS Code.

3. **Configure o ambiente:**

   - Copie o arquivo `.env.example` para `.env` e ajuste se necessário:
     ```sh
     cp .env.example .env
     ```

4. **Suba os containers com Docker Compose:**

   ```sh
   docker compose up --build
   ```

> Se estiver usando Docker Compose antigo:
> ```sh
   > docker-compose up --build
   > ```

5. **Acesse a aplicação:**

   - O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

6. **Testes de API:**

   - Utilize o arquivo [Insomnia.yaml](Insomnia.yaml) para importar as rotas no Insomnia.


## Créditos

Desenvolvido por equipe Escola do Rock:

Bruno Henrique: 6324003
Luiz Felipe Cardoso: 6324303
Riquelme Borges: 6324064
Naor Muckemberg: 6324552

---

> Dúvidas ou sugestões? Abra uma issue no [repositório](https://github.com/sleyck021/ESCOLA-DO-ROCK).
