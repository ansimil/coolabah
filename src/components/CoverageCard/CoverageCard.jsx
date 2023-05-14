import './CoverageCard.css'
import { useNavigate } from 'react-router-dom'

const CoverageCard = ({ coverage, color }) => {
    const navigate = useNavigate()
  return (
    <div className={`coverage-card-container ${color}`} >
        <div className='coverage-title-container'>
            <h3>{coverage.name}</h3>
        </div>
        <div className="coverage-description-container">
            <p>{coverage.description}</p>
        </div>
        <div className='coverage-services-container'>
            <h4>includes:</h4>
            <ul className='coverage-services-list'>
                {coverage.benefits.map((benefit, i) => {
                    return (
                        <li key={`service${coverage.name}${i+1}`} className='service-list-element'>
                            {benefit}
                        </li>
                    )
                })} 
            </ul>
        </div>
        <div className='coverage-select-container'>
                <button 
                className='select-coverage-btn btn'
                onClick={() => {
                    navigate('/get-quote')
                }}
                >
                    Select
                </button>
        </div>
    </div>
  )
}

export default CoverageCard