// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, ondelete} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTrans = () => {
    ondelete(id)
  }

  return (
    <li className="list-row">
      <p className="li-text">{title}</p>
      <p className="li-text">{amount}</p>
      <p className="li-text">{type}</p>
      <div>
        <button
          className="button3"
          type="button"
          onClick={deleteTrans}
          testid="delete"
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
