import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/home/logo.png'
import './NavBar.css';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === location.pathname) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [location]);

  return (
    <div className='contain'>
      <a href='/' className='logo'>
        <img  src={logo} alt='site logo'  />
      </a>
      <ul className='nav-links'>
        <li><a href='/home' className='nav-link active'>Home</a></li>
        <li><a href='/profile' className='nav-link'>Profile</a></li>
        <li><a href='/projects' className='nav-link'>Projects</a></li>
        <li><a href='/contact' className='nav-link'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
