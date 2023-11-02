import './RoadMap.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RoadMap = () => {
  return (
    <div className='map'>
      <div className='title'>
        <h2>Coding Roadmap</h2>
      </div>
      <div>
      <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(27, 153, 188)' }}
                date="2016"
                iconStyle={{ background: 'rgb(233 105 243)', color: '#fff' }}
                icon={<i className="ico ri-plant-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Visual Basic</h3>
                <h4 className="vertical-timeline-element-subtitle">Mackillop College 2016-17</h4>
                <p>
                Visual Basic is a high-level programming language developed by Microsoft for creating Windows applications with a graphical user interface.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2018"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-gallery-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Python</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2018</h4>
                <p>
                Python is a high-level, interpreted programming language that emphasizes code readability, with a design philosophy that emphasizes code readability and simplicity.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2018"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-file-shield-line"/>}
            >
                <h3 className="vertical-timeline-element-title">C++ Arduino</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2018</h4>
                <p>
                Built and coded a Flight Data Recorder for a Glider Aircraft in C++ Arduino to log flight 
                parameters with onboard sensors
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2019"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-copper-coin-line" />}
            >
                <h3 className="vertical-timeline-element-title">Learnt Java</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2019</h4>
                <p>
                Java is a popular programming language that is widely used for developing enterprise applications, mobile apps, games, and more, due to its platform independence and object-oriented programming approach.
                </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2019"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-hand-heart-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">C Atmel Microprocessor</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2019</h4>
                <p>
                Built and coded the space Astroids game using an AVR Microcontroller and coded features and functionality using C in Atmel Studio
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2019"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-xbox-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">Data Structures & Algrithms</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2019</h4>
                <p>
                Learnt fundemental concepts of Algorithms and Data Structures as well as methods of performance and storage optimisation with Big O Notation
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2019"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-copper-coin-line" />}
            >
                <h3 className="vertical-timeline-element-title">Java Sprint Studio Environment</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2019</h4>
                <p>
                Participated in a semester long project of game development of a Gradle wrapped Java game based on Bloons Tower Defence and Faster Than Light. In a group of 50 students and fortnightly sprints got experience and exposure to large scale git, branches, merging, rebase, standup, Jenkins and SonarQube.
                </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2019"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-rocket-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Figma HCI UI/UX</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2019</h4>
                <p>
                Developed design skills of HCI related to UI/UX design principles. As well as core skills in design applications such as Adobe XD and Figma for both Mobile and Computer usaage of Applications or Websites
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2020"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-plane-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Web Development</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2020</h4>
                <p>
                Learn the basics of building scalable websites written in vanilla Javascript, CSS and HTML
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2020"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt React</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2020</h4>
                <p>
                Built simple frontend web applications using the react library with JSX
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2021"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Python Machine Learning</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2021</h4>
                <p>
                Used Python for machine learning, by using libraries like Scikit-Learn, TensorFlow, and Keras to produce working models and enbale data analysis
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2022"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Solidity Thesis Project</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2022</h4>
                <p>
                Built a Pyhton Static Analysis tool PySolSweep that evaluated the security safety of Solidity based Smart Contracts, as well as  providing a systematic approach of suggested solutions to overcome bugs, vulnerabilities or countermeasures, as well as a contract rating score.
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2022"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Fullstack Web Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2022</h4>
                <p>
                Learnt basics on Node Js with Express, as well as integrating backend database BaaS services such as Firebase or Sanity.
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2022"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Intermediate React Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2022</h4>
                <p>
                Produced personal projects in React which integrate aspects of backend features as well as more intermediate frontend fundementals such as Bootstrap, Tailwind and use of NPM libraries.
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2022"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Web3 Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2022</h4>
                <p>
                Learnt the basics of building Fullstack React Applications with Hardhat to connect to the Ethereum Blockchain as well as intermediaries such as Metamask. Inlcuding building a DEX DaPP for Optimism (OP) Holders to transact funds
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2021-22"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Solidity</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2021-22</h4>
                <p>
                Learnt programming in Solidity throughout my Thesis project, as well as penetration testing courses taken during university.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2022"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Typescript</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2022</h4>
                <p>
                Learnt Typescript both in its vanilla and React origins. Developed some personal projects written in Typescript
                </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2023"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Advanced React Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Personal Projects 2023</h4>
                <p>
                Started learning advanced topics in React such as Redux, Context, Memo and dealing with Bottlenecks in code performance
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2023 - Present"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Vue3 Intermidiate</h3>
                <h4 className="vertical-timeline-element-subtitle">Small Vue3 Projects 2023</h4>
                <p>
                Reached an Mid-Intermediate level for Vue3 development, by transfering skils and concepts
                from React.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(233 105 243)', color: '#fff' }}
                icon={<i className="ico ri-medal-2-fill"/>}
                date="Seeking Remote Frontend/Fullstack Role"
                className='final'
            />
        </VerticalTimeline>

      </div>
      
    </div>
  )
}

export default RoadMap