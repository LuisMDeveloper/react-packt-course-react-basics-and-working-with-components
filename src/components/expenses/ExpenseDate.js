import './ExpenseDate.css'

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const year = props.date.getFullYear()
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  return (
    <div className="ep-date">
      <div>{month}</div>
      <div>{year}</div>
      <div className="ep-day-date">{day}</div>
    </div>
  )
}
