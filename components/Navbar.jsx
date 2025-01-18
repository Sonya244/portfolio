import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';


const Navbar = ({ toggleTheme }) => {
return (
    <nav className="navbar">
        <div className='navbarSection'>
        <h1>Hi, i'm Sonya</h1>
        <p>&gt; Front-end developer</p>
        </div>
        <a href='/'>my telegram<FontAwesomeIcon icon={faTelegram} className='gitIcon'/></a>
        <a href ='/'>my git<FontAwesomeIcon icon={faGithub} className='gitIcon'/></a>
        <button className = 'light-mode-toggle' onClick={toggleTheme}>
            light mode <FontAwesomeIcon icon={faSun} className='gitIcon'/>
        </button>
    </nav>
)
}
export default Navbar