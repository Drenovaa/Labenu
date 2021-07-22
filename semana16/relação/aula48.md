### EXERCICIO 1

A)
É a primary key de outra tabela

B)
---

C)
```sql
  Cannot add or update a child row: a foreign key constraint fails (`paiva-2125554-guilherme-rodrigues`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
Não é possivel adicionar um item em uma tabela sem a chave de referência.

D)
```sql
  Unknown column 'rating' in 'where clause'
```

### EXERCICIO 2

A)
Ela será uma tabela ponte que vai conectar duas informações de duas tabelas diferentes

B)
```sql
INSERT INTO MovieCast (movie_id,actor_id)
VALUE
('001', '002'),
('001', '004'),
('003', '004'),
('004', '004'),
('004', '002'),
('004', '005');
```
C)
```sql
  Cannot add or update a child row: a foreign key constraint fails (`paiva-2125554-guilherme-rodrigues`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

Não é possivel adicionar

D)
```sql
  Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125554-guilherme-rodrigues`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não é possivel apagar devido a existencia de uma chave relacionada a outra tabela

### EXERCICIO 3

A)
O Join faz com que adicione a tabela rating na tabela movie

B)
```sql
SELECT title, Movie.id, Rating.rate from Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
