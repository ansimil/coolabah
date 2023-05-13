import cIcon from '../../assets/icons/coolabah-c-icon.png'
import textIcon from '../../assets/icons/coolabah-text-icon.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar__logo-container'>
            <img className='c-icon' src={cIcon} alt="coolabah-icon"/>
        </div>
        <div className='navbar-middle-container'>
            <img className='text-icon' src={textIcon} alt="text-icon" />
        </div>
        <div className='navbar-end-container'>
            <button className='btn contact-btn blue'>
                Contact
            </button>
        </div>
        {/* <div className='navbar__tagline-container'>
            <p className='tagline'>Simple</p>
            <p className='tagline'> Reliable</p>
            <p className='tagline'>Car Insurance</p>
        </div> */}
    </div>
  )
}

export default Navbar