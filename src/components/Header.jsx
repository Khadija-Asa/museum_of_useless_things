import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/header.css';

const Header = () => {
  return (
    <>
      <nav className='navbar_menu'>
        <li>
          <Link to="/">
            useless hall 
          </Link>
        </li>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1D2D93" class="bi bi-dot" stroke="#1D2D93"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>
        <li>
          <Link to="/ne_clique_pas">
            do not click
          </Link>
        </li>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1D2D93" class="bi bi-dot" stroke="#1D2D93"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>
        <li>
          <Link to="/machine_a_compliments">
            ego booster
          </Link>
        </li>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1D2D93" class="bi bi-dot" stroke="#1D2D93"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>
        <li>
          <Link to="/qui_s_ennuie">
            bored pixels
          </Link>
        </li>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1D2D93" class="bi bi-dot" stroke="#1D2D93"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>
        <li>
          <Link to="/rage_button">
            instant regret
          </Link>
        </li>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1D2D93" class="bi bi-dot" stroke="#1D2D93"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>
        <li>
          <Link to="/">
            no idea
          </Link>
        </li>
      </nav>
    </>
  )
}

export default Header