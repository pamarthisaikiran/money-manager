// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="container">
      <div className="balance">
        <img
          alt="balance"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="para1"> Your Balance</p>
          <p testid="balanceAmount" className="para2">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance">
        <img
          alt="income"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="para1"> Your Income</p>
          <p testid="incomeAmount" className="para2">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance">
        <img
          alt="expenses"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="para1"> Your Expenses</p>
          <p testid="expensesAmount" className="para2">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
