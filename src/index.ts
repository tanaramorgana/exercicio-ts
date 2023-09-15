import { Grades, Wallet, Product, User, Director, employee } from "./types/types"


// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.


function isApproved(n1: number, n2: number) {
  const average = (n1 + n2) / 2;
  const approved = average >= 6;
  
    return {
      'media': average,
      'apovado': approved
    }
}

console.log(isApproved(8, 9));


// // 2. Crie uma função que receba uma lista de objetos contendo nota e
// // peso, realize a média das notas considerando o peso. Exemplos:
// // Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// // Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

const arrayOfGrades: Grades[] = [{
      nota: 8,
      peso: 1
  },
  {
      nota: 7,
      peso: 2
  },
  {
      nota: 6,
      peso: 3
  }];

function gradesAverage(arrayOfGrades: Grades[]): number{
  let addGrades = 0;
  for (const grade of arrayOfGrades) {
    addGrades += grade.nota * grade.peso;
  }
  return addGrades / arrayOfGrades.length;
}

console.log(gradesAverage(arrayOfGrades));


// // 3. Crie um programa que simule uma carteira de dinheiro. Este
// // programa vai precisar ter uma carteira contendo saldo, transações
// // de entrada e saídas. Ou seja, será um objeto com estas
// // propriedades. Depois crie uma função para lançar uma entrada e
// // uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// // um erro ou avisar.

const wallet: Wallet = {
    balance: 100,
    transactions: []
}

function transaction(description: string, value: number): string | number {
    if (description === 'entrada') {
      wallet.transactions.push({ description, value });
      return wallet.balance += value;
    }
  
    if (description === 'saida') {
      if (wallet.balance <= 0) {
        return 'saldo insuficiente';
      }
      wallet.transactions.push({ description, value });
      return wallet.balance -= value;
    }
  
    return 'transação inválida';
}

wallet.transactions.push()
console.log(transaction('entrada', 200));




// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

const products: Product[] = [];

function listProducts (products: Product[]): void{
  products.map((product) => {
    console.log(product);
    
  })
}

function registerProduct (product: Product): void{
  products.push(product);
}

registerProduct({name: 'banana'});
registerProduct({name: 'maça'});
listProducts(products);

function excludeProduct (product: string): void{
  let findProduct = products.findIndex((value) => value.name == product);

  products.splice(findProduct, 1);
}

excludeProduct('banana');

// // 5. Crie um programa para mostrar informações de usuários (User) de
// // uma empresa. Crie o tipo User com as seguintes propriedades:
// // nome, idade, ocupação e salário (opcional). Caso o salário do
// // usuário não seja informado, mostre o valor “N/A”. Exemplo:
// // a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// // b. “Daphne, 23 anos, analista de TI, salário N/A”

const users: User[] =  [{
  name: 'Maria',
  age: 18,
  occupation: 'analista de TI'
},
{
  name: 'Daphne',
  age: 23,
  occupation: 'analista de TI',
  salary: 2000
}];

function showUser(users: User[]){

 for (const user of users) {
    if(!user.salary){
      user.salary = 'N/A'
    }
    console.log(`${user.name}, ${user.age} anos, ${user.occupation}, salário ${user.salary}`);
    
}
}

showUser(users);

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

const directors: Director[] =  [{
  name: 'Paulo',
  age: 30,
  commission: 5,
  salary: 5000
},
{
  name: 'José',
  age: 50,
  commission: 4
}]

function showDirector(directors: Director[]){
  for (const director of directors) {
     if(!director.salary){
      director.salary = 'N/A'
    }
    console.log(`Diretor(a) ${director.name}, ${director.age} anos, comissão nível ${director.commission}, salário ${director.salary}`);
  }
}

showDirector(directors);

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

const employees = [{
  name: 'Paulo',
  age: 30,
  commission: 5,
  salary: 5000
},
{
  name: 'Mario',
  age: 40,
  commission: 3
},
{
  name: 'Daphne',
  age: 23,
  occupation: 'analista de TI',
  salary: 2000
},
{
  name: 'Joana',
  age: 30,
  occupation: 'analista de TI'
}];

function showEmployee(employees: employee[]){
  for(const employee of employees){
    if(!employee.salary){
      employee.salary = 'N/A'
    }
    if('commission' in employee){
      console.log(`Diretor(a) ${employee.name}, ${employee.age} anos, comissão nível ${employee.commission}, salário ${employee.salary}`);
    } else {
      console.log(`${employee.name}, ${employee.age} anos, ${employee.occupation}, salário ${employee.salary}`);
    }
  }
}

showEmployee(employees);