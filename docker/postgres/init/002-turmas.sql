CREATE TABLE IF NOT EXISTS turmas (
    id_turma SERIAL PRIMARY KEY,
    id_professor INTEGER,
    CONSTRAINT chave_estrangeira_professor
        FOREIGN KEY (id_professor)
        REFERENCES professores (id_professor)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO turmas (id_professor) VALUES
(1),
(2);