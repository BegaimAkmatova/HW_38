import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'; 

function Expenses(props) {
    //тандалган жылдарды Expense ушул состоянияда сактайт
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHundler = 
    //аргумент жазбасак иштебейт
    (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
//filter the expenses for the selected year
    const filteredExpenses = props.expenses.filter((expense) => 
         expense.date.getFullYear() === Number(filteredYear)
    
    )


    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
        //props berildi ExpensesFiltr.js alysh uchun
        onChangeFilter={filterChangeHundler} />
        <ExpensesList items={filteredExpenses}/>
        {/* filteredExpense расходниктерди items ке сактайбыз аны props кылып алабыз Espenses.js тен */}
        <div className="signature-container">
        <a href="https://github.com/snnazarmatov" className="signature">
          By SN.coding
        </a>
      </div>
    </Card>
}

export default Expenses;