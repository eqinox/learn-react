import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // update state basic 1
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // update state 2
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHnalder = (event) => {
        // update state basic 1
        setEnteredTitle(event.target.value);

        // update state 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        
        
        // ====== Update state way 3 most safety with previous state ======
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        // update state basic 1
        setEnteredAmount(event.target.value);

        // update state 2

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        
        
        // Update state 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        // update state basic 1
        setEnteredDate(event.target.value);

        // update state 2

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        // update state combine approach
        
        
        // Update state 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Entered Date' + enteredDate);
        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseDate);
        // with the help of 2 way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <babel>Title</babel>
                <input type="text" onChange={titleChangeHnalder} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <babel>Amount</babel>
                <input type="number" onChange={amountChangeHandler}value={enteredAmount} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <babel>Date</babel>
                <input type="date" onChange={dateChangeHandler} value={enteredDate} min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;