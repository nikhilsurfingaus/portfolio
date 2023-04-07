import './Footer.css'
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="footer-div">
        <Slide direction="down">
        <p className="footer-text">
          Made With <span role="img">❤️</span> By Nikhil Naik
        </p>
        </Slide>
    </div>  
    )
}

export default Footer