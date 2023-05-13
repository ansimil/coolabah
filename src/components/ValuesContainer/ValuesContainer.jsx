import { values } from "../../values"
import ValueCard from "../ValueCard/ValueCard"
import './ValuesContainer.css'

const ValuesContainer = () => {
  return (
    <div className='values-container'>
        {values.map((value, i) => {
            return (
                <ValueCard key={`value${i+1}`} value={value}/>
            )
        })}
    </div>
  )
}

export default ValuesContainer