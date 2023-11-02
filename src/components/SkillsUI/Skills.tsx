import './Skills.css'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "../skillbar/SkillsTab";
import Row from "react-bootstrap/Row";
import {Jumbotron} from "../skillbar/Jumbo";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const isScrolled = true; // Define the isScrolled prop

const hardSkills = [
  { name: "React TSX", value: 95 },
  { name: "Javascript", value: 88 },
  { name: "Python", value: 85 },
  { name: "CSS", value: 78 },
  { name: "Typescript", value: 90 },
  { name: "Solidity/Web3", value: 85 },
  { name: "Vue TS", value: 72 },
  { name: "Django", value: 78 },
  { name: "Java", value: 82 },
  { name: "OracleSQL", value: 80 },
];

const softSkills = [
  { name: "Collaboration", value: 90 },
  { name: "Goal-Orientated", value: 88 },
  { name: "Problem Solving", value: 85 },
  { name: "Empathy", value: 86 },
  { name: "Chat GPT", value: 96 },
  { name: "Time Management", value: 88 },
  { name: "Creativity", value: 96 },
  { name: "Adaptability", value: 88 },
  { name: "Positivity", value: 96 },
  { name: "UI/UX Design", value: 95 },
];


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
