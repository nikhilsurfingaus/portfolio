import About from "../components/About";
import ScrollToTop from "react-scroll-to-top";
import { Skills } from "../components/Skills";

const Profile = () => {
    return (
        <>
            <ScrollToTop smooth color="#B534B0" />
            <About />
            <Skills />
        </>
    )
}

export default Profile;