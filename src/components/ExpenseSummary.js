import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from "react-router-dom";


const ExpensesSummary = ({ expenseCount, expenseTotal }) => { // Destructure props here
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expenseCount} </span> Expense(s) with total : <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span></h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

    const visibleExpense = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpense.length,
        expenseTotal: selectExpensesTotal(visibleExpense)
    };
};


export default connect(mapStateToProps)(ExpensesSummary);