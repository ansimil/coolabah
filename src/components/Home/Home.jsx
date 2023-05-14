import './Home.css'
import ValuesContainer from '../ValuesContainer/ValuesContainer'
import downArrow from '../../assets/icons/down-arrow.png'
import CoverageContainer from '../CoverageContainer/CoverageContainer'

const Home = ({ coverageRef, setCoverageRef }) => {
  return (
    <div className='home-container'>
        <div className='home__header-container'>
            <h3 className='home__header'>Are you looking for <span style={{"color": "#4285f4"}}>great</span> car insurance that is:</h3>
        </div>
        <ValuesContainer />
        <h3 className='home__header'>We've got you <span style={{"color": "#4285f4"}}>covered</span>. Check our options below</h3>
        <img
        onClick={()=> {
            window.scrollTo({
            top: coverageRef.offsetTop,
            behavior: "smooth"
            })
        }}
        className='down-arrow' 
        src={downArrow} 
        alt="arrow" 
        height="50px" 
        width="50px" />
        <CoverageContainer setCoverageRef={setCoverageRef} />
    </div>
  )
}

export default Home