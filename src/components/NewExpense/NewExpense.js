import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showModal, setShowModal]= useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowModal(false)
    }

    const closeModal=()=> {
        setShowModal(false)
    }
    return <div className='new-expense'>
        
        {showModal===true ?
        (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeModal={closeModal} />) : (
            <button onClick={()=>setShowModal(!showModal)}>Add New Expense</button>
        )
        }
        
    </div>
}
export default NewExpense;