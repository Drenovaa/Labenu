### Exercicio 1

A)
Remove uma coluna de uma tabela

B)
Troca o nome da coluna de gender para sex

C)
Mantem o nome da coluna como gender e altera a quantidade de caracteres para 255

D)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2

A)
```sql
UPDATE Actor
SET name = "Fernanda M.", birth_date="1929-10-18"
WHERE id = "003";
```

B)
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

--
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

```

C)
```sql
UPDATE Actor
SET name = "Juliana P.", salary = 695420, birth_date = "1979-03-25", gender="male"
WHERE id = "005";
```

D)
Caso seja utilizado um id inválido não acusará erro, porém nada será alterado.

### Exercicio 3

A)
```sql
DELETE FROM Actor WHERE name = "Fernanda M.";
```

B)
```sql
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercicio 4

A)
```sql
SELECT MAX(Salary) AS "Maio salário"
FROM Actor;
```

B)
```sql
SELECT MIN(Salary) AS "Menor salário"
FROM Actor
WHERE gender = "female";
```

C)
```sql
SELECT COUNT(*) AS "Quantidade de atrizes"
FROM Actor
WHERE gender = "female";
```

D)
```sql
SELECT SUM(salary) AS "Soma de salario"
FROM Actor;
```

### Exercicio 5

A)
Será retornado uma tabela agrupada com a quantidade de atores por gênero

B)
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

C)
```sql
SELECT name
FROM Actor
ORDER BY salary DESC;
```

D)
```sql
SELECT name
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

E)
```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercicio 6

A)
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

B)
```sql
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

C)
```sql
UPDATE Movie
SET playing_limit_date = "2006-01-30"
WHERE id = "001";

--
UPDATE Movie
SET playing_limit_date = "2021-07-30"
WHERE id = "004";
```

D)
```sql
DELETE FROM Movie
WHERE id = "002";
```
Não houve erro, porém nada foi alterado, já que o id atualização não existe na tabela

### Exercicio 7

A)
```sql
SELECT COUNT(rating) AS "Filmes maiores que 7.5"
FROM Movie
WHERE rating > 7.5
AND playing_limit_date = CURRENT_DATE();
```

B)
```sql
SELECT AVG(rating) AS "Média de avaliação"
FROM Movie;
```

C)
```sql
SELECT COUNT(*) AS "Filmes em cartaz"
FROM Movie
WHERE playing_limit_date = CURRENT_DATE()
```

D)
```sql
SELECT COUNT(*) AS "Lançamentos futuros"
FROM Movie
WHERE release_date > CURRENT_DATE();
```

E)
```sql
SELECT MAX(rating) AS "Maior Avaliação"
FROM Movie;
```


F)
```sql
SELECT MIN(rating) AS "Menor Avaliação"
FROM Movie;
```

### Exercicio 8

A)
```sql
SELECT *
FROM Movie
ORDER BY title ASC;
```

B)
```sql
SELECT *
FROM Movie
ORDER BY title ASC
LIMIT 5;
```


C)
```sql
SELECT *
FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```


D)
```sql
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```