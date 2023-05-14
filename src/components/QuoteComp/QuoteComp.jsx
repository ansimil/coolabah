import CoverageCard from '../CoverageCard/CoverageCard'
import { coverages } from '../../coverages'
import './QuoteComp.css'

const QuoteComp = () => {
  return (
    <div className='quote-comp-container'>
        <div className='quote-comp__header'>
            <p>With the extra information you have provided we can confirm that this coverage will suit you perfectly. <br/><br/>The following quote offers the best value for money on the market.</p>
            <h3>Your quote for Basic coverage:</h3>
            <h3>$150/Month</h3>
            
        </div>
        <div>
            <CoverageCard coverage={coverages[0]} select={false}/>
        </div>
        
    </div>
  )
}

export default QuoteComp