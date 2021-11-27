import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

//условный рендеринди озунчо компонент кылып алдык
const ExpensesList = props => {
    //1-элементтер барбы жокбу текшерип алабыз,алар 0 болсо NO Found иштейт элемент бар болсо map ()иштейт.
    if (props.items.length === 0) {
        //props аркылуу items  келип жатат
        return <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map((el) => {
            return <ExpenseItem
                title={el.title}
                amount={el.amount}
                date={el.date}
                key={el.id}
            />
        })}
    </ul>

}

export default ExpensesList;