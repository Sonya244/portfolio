import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
const MySkillsSection = () =>{
    return(
        <div className="SkillsSection">
          <p>&gt;<FontAwesomeIcon icon={faFolder} className='gitIcon' id='folderIcon'/><span id='pText'> my skills</span></p>
          <div className="GridContainer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
}

export default MySkillsSection