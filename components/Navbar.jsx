import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
return (
    <nav className="navbar">
        <h1>Hi, i'm Sonya</h1>
        <p>Front-end developer</p>
        <a href='/'>my telegram<FontAwesomeIcon icon={faTelegram} className='gitIcon'/></a>
        <a href ='/'>my git<FontAwesomeIcon icon={faGithub} className='gitIcon'/></a>
        <a href ='/'>light mode <FontAwesomeIcon icon={faSun} className='gitIcon'/></a>
    </nav>
)
}
export default Navbar