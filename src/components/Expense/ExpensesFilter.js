import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    
    const selectChangeHundler = (event) => {
         //event from select
         //callback function ichinde(lifting up,props. tun ichindegi onChageFilter di chakyrdyk)eventin targetinen kelgen value nu alat
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} 
                //onchange callback berildi,
                onChange={selectChangeHundler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    {/* жылдардын маанилерин кантип алабыз? подьем состояние колдонобуз*/}
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;