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
    return (
        <div>
            <ExpensesFilter selected={filteredYear} onChangeChild={filterChangeHandler}/>
            <Card className="expenses">
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}
                />
            </Card>
        </div>
        
    )
}

export default Expenses;