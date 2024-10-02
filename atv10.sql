--01
SELECT nome FROM ALUNO;

--02
SELECT matricula_id FROM MATRÍCULA;

--03
SELECT matricula_id 
FROM MATRÍCULA 
WHERE turma_id IS NULL;

--04
SELECT aluno_id 
FROM MATRÍCULA 
WHERE turma_id = 30;

--05
SELECT T.horario 
FROM TURMA T
JOIN MATRÍCULA M ON T.turma_id = M.turma_id
JOIN ALUNO A ON A.aluno_id = M.aluno_id
WHERE A.nome = 'PATOLINO';