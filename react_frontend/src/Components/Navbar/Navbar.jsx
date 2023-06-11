import react, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import {images} from '../../Constants'
import './Navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="images" />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About Us', 'Product', 'News', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick= {() => setToggle(true)}/>
            {toggle && (
            <motion.div 
                whileImView={{ x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut'}}>

                  <HiX onClick= {() => setToggle(false)}/>
               <ul>
                 {['Home', 'About Us', 'Product', 'News', 'Contact'].map((item) => (
                   <li key={item}>
                     <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                     </a>
                   </li>
                 ))}
               </ul>
            </motion.div>
            )}
      </div>
    </nav>
  )
}

export default Navbar;