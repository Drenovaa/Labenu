###                 HERANÇA
### Exercicio 1

```tsx
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}
```


A)
Não, pois a mesma só pode ser acessadara pela instancia devido ela ser private e não existe nenhuma função publica que de acesso a ela.
As unicas informações possiveis de obter são o ID, Email e Nome

B)
Uma vez, pois o construtor é passado uma vez ao receber todas as infromaçoes solicitadas

### Exercicio 2

```tsx
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
```

A)
Apenas uma, após receber todas as infromações necessárias

B)
Uma vez, pois ao criar um customer ele passa pelo contrutor da subclasse e na sequencia é enviado para a super que é a classe "pai" onde será passado pelo seu construtor.

### Exercicio 3

```tsx
const dimitri = new Customer("a", "email@a.com", "dimitri", "12456","débito")

```

A)
Não pois a classe pai que contem a senha mantem ela como privada e só pode ser acessada por ela mesma.

### Exercicio 4

```tsx
  public introduceYourself(): string{
    return "Saudações!"
  }

dimitri.introduceYourself()
```

### Exercicio 5
```tsx
  public introduceYourself(): string{
    return `Saudações ${this.name}!`
  }

dimitri.introduceYourself()
```

### _________________________________________________

###                 POLIMORFISMO

### Exercicio 1


```tsx
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Dimitri",
  registrationNumber: 1,
  consumedEnergy: 10,

  calculateBill: () => {
    return 2;
  }

}
```

A)
Todas, porque nenhuma propriedade recebeu a privado

### Exercicio 2

A)
Cannot create an instance of an abstract

B)
Remover o abstract para poder criar uma instancia

### Exercicio 3

A)
Remover o abstract para poder criar uma instancia


### Exercicio 4



