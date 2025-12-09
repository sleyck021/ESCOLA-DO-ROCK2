CREATE TABLE IF NOT EXISTS avaliacoes (
    id_avaliacao SERIAL PRIMARY KEY,
    materia VARCHAR(255),
    id_turma INTEGER,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    vencimento TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chave_estrangeira_turma
        FOREIGN KEY (id_turma)
        REFERENCES turmas (id_turma)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO avaliacoes (materia, id_turma, vencimento) VALUES
('Português', 1, '2005-05-05'),
('Matematica', 2, '2012-12-12')