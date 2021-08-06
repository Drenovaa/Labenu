### EXERCICIO 1

A)
Ele serve para receber o devido parâmetro necessário ao criar a instância, chamamos ele criando uma constante ex:
```tsx
const novaConta = new UserAccount("cpf","nome", idade)
```

B)
4x, pois ao criar uma nova instancia o constructor não recebeu nenhum parametro e imprime no console a chamada.
```tsx
const novaConta = new UserAccount()
const novaConta = new UserAccount("cpf")
const novaConta = new UserAccount("cpf", "nome")
const novaConta = new UserAccount("cpf","nome", idade)
```

C)
Criando uma variavel/função publica que de acesso a elas EX:
```tsx
  public getNome() {
    return this.name;
  }
novaConta.getNome()

```

### EXERCICIO 2

```tsx
class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  public getNome() {
    return this.name;
  }

  public adicionarTransacao(date: string, value:number, description :string) {
    const transacao = new Transaction(date, value, description)
    this.transactions.push(transacao)
  }

  public verTransacoes(){
    console.log(this.transactions)
  }
}

const novaConta = new UserAccount("000.000.000-01", "Dimitri", 32)
novaConta.adicionarTransacao("01/01/2020", 100, "sem descrição")
novaConta.verTransacoes()

```

### EXERCICIO 3

```tsx
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

const contaBanco = new Bank(novaConta)
```
