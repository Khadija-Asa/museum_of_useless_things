import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/header.css';

const Header = () => {
  return (
    <>
      <nav className='navbar_menu'>
        <li>
          <Link to="/">
            le hall 
                    <svg fill="#2500E5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path></g></svg>

          </Link>
        </li>
        <li>
          <Link to="/ne_clique_pas">
            ne clique surtout pas
          </Link>
        </li>
        <li>
          <Link to="/machine_a_compliments">
            la machine à compliments
          </Link>
        </li>
        <li>
          <Link to="/qui_s_ennuie">
            la page qui s'ennuie de fou
          </Link>
        </li>
        <li>
          <Link to="/rage_button">
            le bouton qui rage frère
          </Link>
        </li>
        <li>
          <Link to="/">
            pas encore pas encore
          </Link>
        </li>
      </nav>
    </>
  )
}

export default Header