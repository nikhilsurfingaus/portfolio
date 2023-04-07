import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const About = () => {
  return (
    <div className='about'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
              <h3 className='aboutmetext'>About Me<span>?</span></h3>
              <p className='aboutdetails'>
                  As a graduate Software Engineer from the University of Queensland, I offer a range of services to help you enhance your online presence. I specialize in building fullstack websites, developing on Web3, creating UI/UX design patterns, and improving existing websites to optimize their functionality and user experience. Whether you're looking to launch a new website or improve an existing one, I can provide the technical expertise you need to succeed.
              </p>
              <div className="list-group">
                <li className="list-group-item">Location: Port Macquarie NSW, Australia</li>
                <li className="list-group-item">Education: University Of Queensland BE(HONS) Software Engineering</li>
                <li className="list-group-item">Experience: 5-6 Years Programming</li>
              </div>
          </Col>
          <Col md={5}>
              <div className="meimage"></div>
          </Col>
          <Col md={12} className="text-center">
              <button className='chat'>Resume <span><AiOutlineCloudDownload /></span></button>
          </Col>
          </Row>
        </Container>
    </div>
  )
}

export default About