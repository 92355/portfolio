
import { useEffect, useState } from 'react';

import '../style/Header.css';



function Header() {
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   
    <header className={scrolled ? 'scrolled' : ''}>
      <a href ="#"><h1>OOJINWOO</h1></a>
      <nav>
       
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
