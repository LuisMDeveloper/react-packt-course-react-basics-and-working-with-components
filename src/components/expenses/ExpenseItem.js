import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate'

export const ExpenseItem = (props) => {
  return (
    <div className="ep-card">
      <div className="ep-row">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
      </div>
      <h2>
        <span className="badge bg-secondary">${props.amount}</span>
      </h2>
    </div>
  )
}
