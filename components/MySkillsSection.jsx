import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
const MySkillsSection = () =>{
    return(
        <div className="SkillsSection">
          <p>&gt;<FontAwesomeIcon icon={faFolder} className='gitIcon' id='folderIcon'/><span id='pText'> my skills</span></p>
          <div className="GridContainer">
            <div className='GridElem'>
              <h3>HTML</h3>
              <p></p>
            </div>
            <div className='GridElem'>
              <h3>CSS</h3>
              <p></p>
              </div>
            <div className='GridElem'>
              <h3>JavaScript</h3>
              <p></p>
            </div>
            <div className='GridElem'>
              <h3>React</h3>
              <p></p>
            </div>
            <div className='GridElem'>
              <h3>TypeScript</h3>
            </div>
            <div className='GridElem'>
            <h3>Git</h3></div>
          </div>
        </div>
    )
}

export default MySkillsSection