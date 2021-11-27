import React, { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
//back end тен келген данный
const INIT_STATE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];//expense массивке жаны обьект кошулса return иштеп кайра гинерация болуш керек биздин учурда.Кантип аткарса болот?подем состояниени колдонобуз

function App() {
  const [expenses, setExpenses] = useState(INIT_STATE);//баштапкы маани катары

  const addExpenseHandler = (expense) => {
    console.log(expense);
//setExpenses чакырабыз анкени состояниени озгортуп жатабыз prevExpense callback функция тузуп акыркы маанини алатурган,и возвращаем массив жаны келген expense жа prevExpense мурдагы эски массивди чогултуп башынан жаны массивди кайтарат. 
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
    
  );
}

export default App;
