
import './ValueCard.css'

const ValueCard = ({ value }) => {
  return (
    <div className='value-card-container'>
        <h2>{value.name}</h2>
        <img className='value-icon' src={value.image} alt={value.name} />
        <p>{value.description}</p>
    </div>
  )
}

export default ValueCard