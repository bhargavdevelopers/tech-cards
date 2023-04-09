// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <h1 className="title"> {title} </h1>
      <p className="description"> {description} </p>
      <div className="img-card">
        <img className="img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
