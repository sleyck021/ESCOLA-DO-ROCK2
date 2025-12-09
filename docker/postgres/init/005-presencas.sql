CREATE TABLE IF NOT EXISTS presencas (
    id_presenca SERIAL PRIMARY KEY,
    id_aluno INTEGER,
    id_aula INTEGER,
    presenca_aluno BOOLEAN,

    CONSTRAINT chave_estrangeira_aluno
        FOREIGN KEY (id_aluno)
        REFERENCES alunos (id_aluno)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT chave_estrangeira_aula
        FOREIGN KEY (id_aula)
        REFERENCES aulas (id_aula)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO presencas (id_aluno, id_aula, presenca_aluno) VALUES
(1, 1, TRUE),
(2, 2, TRUE),
(2, 1, FALSE),
(1, 2, FALSE)