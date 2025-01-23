import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';


const Navbar = ({ toggleTheme }) => {
return (
    <nav className="navbar">
        <div className='navbarSection'>
           
        <h1>Hi, i'm Sonya</h1>
        <p id='navbarText'>&gt; Front-end developer</p>
        
        </div>
        <div className='navbarSectionTwo'>
        <a href="https://t.me/killja" target="_blank">my telegram<FontAwesomeIcon icon={faTelegram} className='gitIcon'/></a>
        <a href ='https://github.com/Sonya244' target="_blank">my git<FontAwesomeIcon icon={faGithub} className='gitIcon'/></a>
        <button className = 'light-mode-toggle' onClick={toggleTheme}>
            light mode <FontAwesomeIcon icon={faSun} className='gitIcon'/>
        </button>
        </div>
    </nav>
)
}
export default Navbar