import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTrans => eachTrans.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  calculateIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTrans.amount
      }
    })
    return incomeAmount
  }

  calculateExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTrans.amount
      }
    })
    return expensesAmount
  }

  calculateBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0

    transactionsList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTrans.amount
      } else {
        expensesAmount += eachTrans.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  ondelete = id => {
    const {transactionsList} = this.state
    const updatetranslist = transactionsList.filter(
      eachTrans => id !== eachTrans.id,
    )

    this.setState({transactionsList: updatetranslist})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const incomeAmount = this.calculateIncome()
    const expensesAmount = this.calculateExpenses()
    const balanceAmount = this.calculateBalance()

    return (
      <div className="bg">
        <div className="card1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="container2" onSubmit={this.onAddTransaction}>
          <form className="form">
            <h1 className="para2">Add Transaction</h1>
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              value={titleInput}
              onChange={this.onChangeTitle}
              className="input"
              id="title"
              placeholder="TITLE"
              type="text"
            />
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <input
              value={amountInput}
              onChange={this.onChangeAmount}
              className="input"
              id="amount"
              placeholder="AMOUNT"
              type="text"
            />

            <label className="label" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              className="input"
              onChange={this.onChangeOptionId}
              value={optionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <div className="trans-list">
            <h1 className="his">History</h1>
            <ul className="ul">
              <li className="list1">
                <p className="box">Title</p>
                <p className="box">Amount</p>
                <p className="box">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  ondelete={this.ondelete}
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
