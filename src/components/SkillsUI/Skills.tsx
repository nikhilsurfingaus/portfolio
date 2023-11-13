import './Skills.css'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "../skillbar/SkillsTab";
import Row from "react-bootstrap/Row";
import {Jumbotron} from "../skillbar/Jumbo";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { hardSkills, softSkills } from './SkillsData';

const isScrolled = true; // Define the isScrolled prop

export const Skills = () => {
  return (
    <div className='skill'>
      <Jumbotron className=" jumbo rounded-4" id="skills" >
      <Container fluid className="p-5">
        <h2 className="display-4 pb-5 text-center head text-white">
          Skills
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Slide direction="left">
              <Row className="pt-3 px-1">
                  <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
              </Row>
            </Slide>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Slide direction="right">
              <Row className="pt-3 px-1">
                <SkillsTab skills={softSkills} isScrolled={isScrolled} />
              </Row>
            </Slide>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
    </div>
  )
}
