
--01
SELECT nome_cafe, descricao, preco_unitario 
FROM CARDAPIO 
ORDER BY nome_cafe;

--02
SELECT 
    C.comanda_id, 
    C.data, 
    C.mesa, 
    C.nome_cliente, 
    I.comanda_id AS codigo_comanda,
    P.nome_cafe, 
    P.descricao, 
    I.quantidade, 
    P.preco_unitario, 
    (I.quantidade * P.preco_unitario) AS preco_total_cafe
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO P ON I.codigo_cardapio = P.codigo_cardapio
ORDER BY C.data, C.comanda_id, P.nome_cafe;

--03
SELECT 
    C.comanda_id, 
    C.data, 
    C.mesa, 
    C.nome_cliente, 
    SUM(I.quantidade * P.preco_unitario) AS valor_total_comanda
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO P ON I.codigo_cardapio = P.codigo_cardapio
GROUP BY C.comanda_id, C.data, C.mesa, C.nome_cliente
ORDER BY C.data;

--04
SELECT 
    C.comanda_id, 
    C.data, 
    C.mesa, 
    C.nome_cliente, 
    SUM(I.quantidade * P.preco_unitario) AS valor_total_comanda
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO P ON I.codigo_cardapio = P.codigo_cardapio
GROUP BY C.comanda_id, C.data, C.mesa, C.nome_cliente
HAVING COUNT(I.codigo_cardapio) > 1
ORDER BY C.data;

--05
SELECT 
    C.data, 
    SUM(I.quantidade * P.preco_unitario) AS total_faturamento
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO P ON I.codigo_cardapio = P.codigo_cardapio
GROUP BY C.data
ORDER BY C.data;