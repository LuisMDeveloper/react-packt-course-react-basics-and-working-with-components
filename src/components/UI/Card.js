import './Card.css'

export const Card = (props) => {
  const className = 'ep-expenses ' + props.className
  return <div className={className}>{props.children}</div>
}
