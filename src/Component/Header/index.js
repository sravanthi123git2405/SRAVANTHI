import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaBars, FaTimes} from 'react-icons/fa'
import './index.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar-container">
      <Link to="/home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={`unordered-lists ${isOpen ? 'active' : ''}`}>
        <li>
          <Link className="home-text" to="/home" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link className="home-text" to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link>
        </li>
        <li>
          <Link className="home-text" to="/applied-jobs" onClick={() => setIsOpen(false)}>Applied Jobs</Link>
        </li>
        <li>
          <button className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
