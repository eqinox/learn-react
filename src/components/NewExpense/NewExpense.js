import './NewExpense.css';

import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // could think better
        };
        props.onAddExpense(expenseData);
    };
    return <div className="new-expense">
    {/* onSaveExpenseData is randomly invented word */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
    </div>
};

export default NewExpense;