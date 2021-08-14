import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => { 
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeChild={filterChangeHandler}/>
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />
            ))}
        </Card>
        </div>
        
    )
}

export default Expenses;