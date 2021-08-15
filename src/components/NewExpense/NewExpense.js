import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {   
    const [isEditing, setIsEditing] = useState(false); 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // could think better
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
    {/* Lifting State Up - onSaveExpenseData is randomly invented word */}
        {!isEditing && (
            <button onClick={startEditingHandler} >Add New Expense</button>
        )}
        {isEditing && (
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={stopEditingHandler} 
            />
        )}
    </div>
};

export default NewExpense;