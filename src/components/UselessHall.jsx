import './../styles/main.css';
import'./../styles/home.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaCode, FaLinkedin } from 'react-icons/fa';
import { RiArrowDropRightLine } from "react-icons/ri";

const Home = () => {

  return (
    <section className='home_container'>

      <div className="social_media">
        <a href="https://khadija-asa.github.io/web_developer/" target="_blank" rel="noopener noreferrer">
          <FaCode size={20} />
        </a>
        <a href="https://github.com/Khadija-Asa" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/khadidja-ait-si-ali/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>

      <span className='side_parag'>Background perfectly uncentered. Just how we like it.</span>

      <h1>
        welcome to the museum <br />
        <span className='spaced'></span>
        of <i>useless</i>&nbsp; things
      </h1>
      <p>
        Where function takes a vacation and pixels misbehave. <br />
       Where logic naps and purpose politely left the room.
      </p>
      <Link to="/do-not-click">
        <button className='btn_enter'>ENTER <RiArrowDropRightLine />
</button>
      </Link>
    </section>
  )
}

export default Home