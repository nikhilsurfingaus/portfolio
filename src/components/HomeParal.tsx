import './Paral.css'
import stars from '../assets/home/stars.png'
import mb from '../assets/home/mountains_behind.png'
import mf from '../assets/home/mountains_front.png'
import rock from '../assets/home/rock5.png'

import { useRef, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {FiFigma} from 'react-icons/fi'
import {MdMail} from 'react-icons/md'
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Slide } from "react-awesome-reveal";


const HomeParal = () => {

    const starsRef = useRef<HTMLImageElement | null>(null);
    const moonRef = useRef<HTMLImageElement | null>(null);
    const mbRef = useRef<HTMLImageElement | null>(null);
    const mfRef = useRef<HTMLImageElement | null>(null);
    const textRef = useRef<HTMLHeadingElement | null>(null);
    const btnRef = useRef<HTMLAnchorElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);
    
    const handleScroll = useCallback(() => {
      let value = window.scrollY;
      if (starsRef.current) {
        starsRef.current.style.left = `${value * 0.25}px`;
      }
      if (moonRef.current) {
        moonRef.current.style.top = `${value * 1.05}px`;
      }
      if (mbRef.current) {
        mbRef.current.style.top = `${value * 0.5}px`;
      }
      if (mfRef.current) {
        mfRef.current.style.top = `${value * 0}px`;
      }
      if (textRef.current) {
        textRef.current.style.marginRight = `${value * 4}px`;
      }
      if (btnRef.current) {
        btnRef.current.style.marginTop = `${value * 1.5}px`;
      }
      if (headerRef.current) {
        headerRef.current.style.top = `${value * 0.5}px`;
      }
    }, [starsRef, moonRef, mbRef, mfRef, textRef, btnRef, headerRef]);
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);
    
  return (

    <>
          <ScrollToTop smooth color="#B534B0" />

        <section className='animate__animated animate__fadeIn'>
            <img ref={starsRef} src={stars} id='sky' alt="sky" />
            <img ref={moonRef} src={rock} id='moon' alt="planet" />
            <img ref={mbRef} src={mb} id='mb' alt="mount" />
            <h2  ref={textRef}  id='text'>  MODERN WEBSITES </h2>
            <a  ref={btnRef} href="#sec" id='btn' >Explore</a>
            <img ref={mfRef} src={mf} id='mf' alt="mount 2" />
        </section>

        <div className="sec" id="sec">
        <Container>
        <Row>
          <Col md={7}>
            <Slide direction="left">
            <h2 className='headtext'>G'Day <span className='wave'>👋 </span></h2>
            </Slide>
            <h2 className='nametext'>You Can Call Me <span className='gradient'>Nik</span></h2>
            <span></span>
            <Typewriter
              options={{
                strings: [
                  "React Js Developer",
                  "Front End Developer", "Fullstack Developer", "Web3 Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
            <button id='fbtn' data-tooltip-id="mail" data-tooltip-content="Gmail"  onClick={() => {
              window.location.href = "mailto:nikhilsurfingaus@gmail.com";
            }}
              className='socailmediabtn'><MdMail className='icon' /></button>


            <button data-tooltip-id="github" data-tooltip-content="Github" onClick={() => {
             window.open("https://github.com/nikhilsurfingaus");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>


              <button data-tooltip-id="link" data-tooltip-content="LinkedIn" onClick={() => {
              window.open("https://www.linkedin.com/in/nikhilsurfingaus");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>


            <button data-tooltip-id="youtube" data-tooltip-content="Youtube" onClick={() => {
              window.open("https://www.youtube.com/@WaveFlightSimulations");
            }}
              className='socailmediabtn'><AiFillYoutube className='icon' /></button>
            <button  data-tooltip-id="figma" data-tooltip-content="Figma" onClick={() => {
              window.open("https://www.figma.com/@waveflightsim");
            }}
              className='socailmediabtn'><FiFigma className='icon' /></button>
          </Col>
          <Col md={5}>
              <div className="imagedeveloper">
              </div>
          </Col>
        </Row>
      </Container>        
      </div>

      <div className='finalHome'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
              <h3 className='aboutmetext'>What Can I Do For YOU <span>?</span></h3>
              <p className='aboutdetails'>
                  As a graduate Software Engineer from the University of Queensland, I offer a range of services to help you enhance your online presence. I specialize in building fullstack websites, developing on Web3, creating UI/UX design patterns, and improving existing websites to optimize their functionality and user experience. Whether you're looking to launch a new website or improve an existing one, I can provide the technical expertise you need to succeed.
              </p>
          </Col>
          <Col md={5}>
              <Slide direction="right">
              <div className="webimage"></div>
              </Slide>
          </Col>
          <Col md={12} className="text-center pb-4">
            <a href="/contact">
              <button className='chat'>Let's Chat <span className='smile'>😃</span> </button>
            </a>
          </Col>
          </Row>
        </Container>
      </div>
      <ReactTooltip  id="github"  place='bottom' />
      <ReactTooltip  id="mail"  place='bottom' />
      <ReactTooltip  id="link"  place='bottom' />
      <ReactTooltip  id="youtube"  place='bottom' />
      <ReactTooltip  id="figma"  place='bottom' />
    </>

  )
}

export default HomeParal