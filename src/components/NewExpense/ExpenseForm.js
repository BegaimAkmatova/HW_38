import React, { useState } from "react"
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // console.log(props);деп чыгарып корсок бизге обьект чыгарып берет
    //{onSaveExpenseData: () => {} } 

    // переменная состояния используется, поскольку форма визуализируется условно, начальная форма визуализации становится ложной, так как нам нужно отображать форму только тогда, когда пользователь нажимает кнопку добавления расходов
    const [renderExpenseForm, setrenderExpenseForm] = useState('')

    
    const [enteredTitle, setEnteredTitle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();// чтобы предотвратить перезагрузку страницы, поскольку форма отправки перезагружает страницу по умолчанию
        let data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        // отправляем данные формы как объект в NewExpense.js по мере обновления там нового массива расходов
        //1st STEP
        props.onSaveExpenseData(data);//submitHandler деген функциянын ичинде чакырып жатабыз

        //clear the form
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // скрыть форму, для этого необходимо повторно оценить эту функцию с переменной состояния (renderExpensForm) как false

        setrenderExpenseForm(false);

    };

   // скрываем ExpensForm при нажатии кнопки отмены

    function ExpenseFormCancleHandler() {
        setrenderExpenseForm(false);
    }

    //add-expense-button баскан сайын форма корсотулот 
    const addExpenseButtonClickHandler = ()=> {
        setrenderExpenseForm(true);
    };

    // рендерим кнопку добавления расходов, начальное отображение
    if (renderExpenseForm) {
        return (

            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2022-12-21"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                {/* added button-cancel */}
                <button onClick={ExpenseFormCancleHandler}>cancel</button>
            </div>
        </form>
        )
    }
 

    

//*** */ рендерим кнопку добавления расходов, начальное отображение***

    return (
        <div
        onClick={addExpenseButtonClickHandler}>
            <button type="submit">Add New Expense</button>
        </div>
    )
}

export default ExpenseForm;