import { coverages } from "../../coverages"
import CoverageCard from "../CoverageCard/CoverageCard"
import { useCallback } from "react"
import './CoverageContainer.css'

const CoverageContainer = ({setCoverageRef}) => {
    const setRef = useCallback(
        (node)=> {
            setCoverageRef(node)
        },
        // eslint-disable-next-line
        []
    )

  return (
    <div ref={setRef} className='coverage-container'>
        {coverages.map((coverage, i) => {
            return (
                <CoverageCard key={`coverage${i+1}`} coverage={coverage} color={i === 0 ? "blue" : "white"}/>
            )
        })}
    </div>
  )
}

export default CoverageContainer