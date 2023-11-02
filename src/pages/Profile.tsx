import About from "../components/AboutUI/About";
import ScrollToTop from "react-scroll-to-top";
import { Skills } from "../components/SkillsUI/Skills";
import RoadMap from "../components/RoadMapUI/RoadMap";

const Profile = () => {
    return (
        <>
            <ScrollToTop smooth color="#B534B0" />
            <About />
            <Skills />
            <RoadMap />
        </>
    )
}

export default Profile;