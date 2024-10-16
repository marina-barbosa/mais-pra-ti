
--Consultas

--01
SELECT * FROM ALUNO;

--02
SELECT 
    A.nome, 
    A.endereco, 
    A.telefone, 
    A.data_nascimento, 
    A.altura, 
    A.peso, 
    T.turma_id, 
    T.curso, 
    T.horario
FROM ALUNO A
JOIN MATRICULA M ON A.aluno_id = M.aluno_id
JOIN TURMA T ON M.turma_id = T.turma_id;

--03
SELECT 
    A.nome
FROM ALUNO A
JOIN MATRICULA M ON A.aluno_id = M.aluno_id
WHERE M.ausencias = 0;

--04
SELECT 
    P.nome, 
    COUNT(T.turma_id) AS quantidade_turmas
FROM PROFESSOR P
JOIN TURMA T ON P.professor_id = T.professor_id
GROUP BY P.nome;

--05
SELECT 
    P.nome AS nome_professor, 
    PT.telefone, 
    T.turma_id, 
    T.data_inicial, 
    T.data_final, 
    T.horario, 
    T.curso, 
    A.nome AS nome_aluno
FROM PROFESSOR P
JOIN TURMA T ON P.professor_id = T.professor_id
JOIN PROFESSOR_TELEFONE PT ON P.professor_id = PT.professor_id
JOIN MATRICULA M ON T.turma_id = M.turma_id
JOIN ALUNO A ON M.aluno_id = A.aluno_id
ORDER BY P.nome, T.turma_id, A.nome;


--Alterações nas tabelas

--01
UPDATE PROFESSOR
SET nome = UPPER(nome);

--02
UPDATE ALUNO
SET nome = UPPER(nome)
WHERE aluno_id IN (
    SELECT M.aluno_id
    FROM MATRICULA M
    JOIN TURMA T ON M.turma_id = T.turma_id
    WHERE T.quantidade_alunos = (
        SELECT MAX(quantidade_alunos) 
        FROM TURMA
    )
);

--03
UPDATE MATRICULA
SET ausencias = 0
WHERE turma_id IN (
    SELECT T.turma_id
    FROM TURMA T
    WHERE T.monitor_aluno_id = MATRICULA.aluno_id
);