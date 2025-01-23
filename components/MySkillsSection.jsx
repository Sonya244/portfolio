import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
const MySkillsSection = () =>{
    return(
        <div className="SkillsSection">
         <p><FontAwesomeIcon icon={faFolder} id='folderIcon'/><span id='pText'> my skills</span></p>
          <div className="GridContainer">
            <div className='GridElem'>
              <div className='GridElemContent'>
              <h3>HTML</h3>
              <p>// Clean, semantic markup for accessible, well-structured web pages.</p>
              </div>
            </div>
            <div className='GridElem'>
              <div className='GridElemContent'>
              <h3>CSS</h3>
              <p>// Modern, responsive designs with Flexbox and Grid</p>
              </div>
              </div>
            <div className='GridElem'>
            <div className='GridElemContent'>
              <h3>JavaScript</h3>
              <p>// Dynamic, interactive, and efficient web functionality</p>
              </div>
            </div>
            <div className='GridElem'>
              <div className='GridElemContent'>
              <h3>React</h3>
              <p>// Scalable UIs with reusable components and hooks</p>
              </div>
            </div>
            <div className='GridElem'>
            <div className='GridElemContent'>
              <h3>TypeScript</h3>
              <p>// Typed JavaScript for safer, more maintainable code.</p>
              </div>
            </div>
            <div className='GridElem'>
            <div className='GridElemContent'>
            <h3>Git</h3>
            <p>// Version control for smooth collaboration and tracking.</p>
            </div>
            </div>
          </div>
        </div>
    )
}

export default MySkillsSection