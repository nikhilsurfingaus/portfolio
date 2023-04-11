import '../components/Portfolio.css'
import Portfolio from "../components/Portfolio";
import ScrollToTop from "react-scroll-to-top";


const Projects = () => {
    return (
        <div>
            <div className='title'>
                <h2>Personal Projects</h2>
            </div>
            <Portfolio />
            <ScrollToTop smooth color="#B534B0" />
        </div>
    )
}

export default Projects;