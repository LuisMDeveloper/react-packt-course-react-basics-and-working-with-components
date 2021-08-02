import './App.css'
import { ExpenseItem } from './components/expenses/ExpenseItem'
import { Card } from './components/UI/Card'

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Groceries', amount: 234.05, date: new Date(2021, 2, 28) },
    { title: 'Internet', amount: 457.56, date: new Date(2021, 2, 28) },
    { title: 'Telephony', amount: 675.36, date: new Date(2021, 2, 28) },
  ]
  return (
    <div className="container">
      <Card>
        {expenses.map(function (expense, index) {
          return (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        })}
      </Card>
    </div>
  )
}

export default App
