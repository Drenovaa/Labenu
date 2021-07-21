### EXERCICIO 1

A)
A resposta vem com todas as informações do banco de dados e geralmente muitas informações que não são necessárias.

B)
index.ts

C)
index.ts

### EXERCICIO 2
A)
```tsx
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

B)
```tsx
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```
C)
```tsx
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

### EXERCICIO 3