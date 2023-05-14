import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"

const Homepage = ({ setCoverageRef, coverageRef }) => {
  return (
    <div className="homepage-container">
        <Navbar coverageRef={coverageRef} setCoverageRef={setCoverageRef} />
        <Home coverageRef={coverageRef} setCoverageRef={setCoverageRef} />
    </div>
  )
}

export default Homepage