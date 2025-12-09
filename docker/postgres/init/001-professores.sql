CREATE TABLE IF NOT EXISTS professores (
    id_professor SERIAL PRIMARY KEY,
    nome_professor VARCHAR(255)
);

INSERT INTO professores (nome_professor) VALUES
('José Bezerra'),
('Flinn Rider');