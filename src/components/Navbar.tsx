import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='contain'>
      <a href='/' className='logo'>Logo</a>
      <div className='menu-icon' onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href='/home' className='nav-link active'>Home</a></li>
        <li><a href='/profile' className='nav-link'>Profile</a></li>
        <li><a href='/projects' className='nav-link'>Projects</a></li>
        <li><a href='/contact' className='nav-link'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
