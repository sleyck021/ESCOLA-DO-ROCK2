CREATE TABLE IF NOT EXISTS notas (
    id_nota SERIAL PRIMARY KEY,
    id_avaliacao INTEGER,
    id_aluno INTEGER,
    nota INTEGER,

    CONSTRAINT chave_estrangeira_avaliacao
        FOREIGN KEY (id_avaliacao)
        REFERENCES avaliacoes (id_avaliacao)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT chave_estrangeira_aluno
        FOREIGN KEY (id_aluno)
        REFERENCES alunos (id_aluno)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO notas (id_aluno, id_avaliacao, nota) VALUES
(1, 1, 9),
(2, 2, 3)