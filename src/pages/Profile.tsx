import About from "../components/About";
import ScrollToTop from "react-scroll-to-top";
import { Skills } from "../components/Skills";
import RoadMap from "../components/RoadMap";

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