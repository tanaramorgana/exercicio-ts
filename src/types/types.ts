export interface Grades {
    nota: number,
    peso: number
  }

export interface Wallet{
    balance: number,
    transactions: {description: string, value: number}[];
}

export interface Product {
    name: string
}

export interface User{
    name: string,
    age: number,
    occupation: string,
    salary?: number | string
};

export interface Director{
    name: string,
    age: number,
    commission: number,
    salary?: number | string
};

export type employee = User | Director;