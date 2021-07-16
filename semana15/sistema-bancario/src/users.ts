export type Transação = {
    value: number;
    date: Date;
    description: string;
  };

export type user = {
    id: number,
    name: string,
    cpf: string,
    saldo: number,
    nascimento: string
  }
  
  export const users: user[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "000.000.000-00",
        saldo: 600,
        nascimento: "01/01/1990"
    },
    {
        id: 2,
        name: "Bob",
        cpf: "000.000.000-01",
        saldo: 1600,
        nascimento: "05/08/2000"
    },
    {
        id: 3,
        name: "Coragem",
        cpf: "000.000.000-02",
        saldo: 300,
        nascimento: "02/12/1990"
    },
    {
        id: 4,
        name: "Dory",
        cpf: "000.000.000-03",
        saldo: -600,
        nascimento: "05/06/1997"
    },
    {
        id: 5,
        name: "Elsa",
        cpf: "000.000.000-04",
        saldo: 10,
        nascimento: "12/12/1992"
    },
    {
        id: 6,
        name: "Fred",
        cpf: "000.000.000-05",
        saldo: 105600,
        nascimento: "25/12/2001"
    }
  ]