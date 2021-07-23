### EXERCICIO 1

A)
PRIMARY KEY = Regista um valor único no banco de dados
VARCHAR(n) = Representa uma string onde n é o máximo de caracteres
NOT NULL = Obriga a inserir um valor no campo
DATE = Atribui uma data no formato YYYY-MM-DD

B)
SHOW DATABASES - Apresenta uma tabela com os banco de dados
SHOW TABLES - Apresenta uam tabela com todas as tabelas 

C)
Ele apresenta uma tabela com as informações da mesma, e o tipo de valor que cada input deve receber, como float, int, varchar, se o valor pode ser NULL e qual input é uma KEY

### EXERCICIO 2

A)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

B)
Duplicate entry '002' for key 'PRIMARY'
O erro reperesnta que estamos tentando criar uma nova entrada com o valor já existente, portando ele apresenta como uma duplicata

C-E)
A tabela requer algumas informações ao passar que são valores que recebem NOT NULL, na tabela de atores não podemos deixar de enviar esse valores

C)
Existem mais valores sendo enviados que requeridos no INSERT, devemos adicionar todos os atributos para cada valor respectivamente
    INSERT INTO Actor (id, name, salary, *birth_date*, *gender*)

D)
Não foi passado o input name que não pode ser NULL
INSERT INTO Actor (id, *name*, salary, birth_date, gender)
VALUES(
  "004",
  *"Grzegorz",*
  400000,
  "1949-04-18", 
  "male"
);

E)
O input date deve ser passado como string, ou seja utilizando aspas "
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  *"1979-03-26",* 
  "female"
);

### EXERCICIO 3

A)
SELECT * FROM Actor
WHERE gender = "female"

B)
SELECT salary FROM Actor
WHERE name = "Tony Ramos" || WHERE name LIKE "%Tony%"

C)
Retorna uma tabela vazia

D)
SELECT id, name, salary from Actor
WHERE salary > 500000

E)
Item com o nome errado o correto seira name
SELECT id, *name* from Actor WHERE id = "002"


### EXERCICIO 4

A)
Sera retornada uma tabela onde possuam nomes que iniciem com "J" ou "A" e possuam salários maior que 300k

B)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

C)
SELECT * FROM Actor
WHERE name LIKE "%g%";

D)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%g%") AND salary BETWEEN 350000 AND 900000;

### EXERCICIO 5

A)
Criar input de artigos

B)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

C)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

D)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

E)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. ",
  "2007-10-05", 
  10
);

### EXERCICIO 6

A)
SELECT id, title, rating FROM Movie WHERE id = "004";

B)
SELECT * FROM Movie WHERE title = "Tropa de Elite";

C)
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

### EXERCICIO 7

A)
SELECT title FROM Movie WHERE title LIKE "%vida%";

B)
SELECT title FROM Movie WHERE title LIKE "%dona%" OR synopsis LIKE "%dona%";

C)
SELECT * FROM Movie WHERE release_date <= "2021-07-19";

D)
WHERE release_date <= "2021-07-19" AND (title LIKE "%uma%" OR synopsis LIKE "%uma%") AND rating > 7;
