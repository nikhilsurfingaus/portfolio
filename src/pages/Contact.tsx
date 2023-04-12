import Floating from "../components/Floating";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className='title'>
                <h2>Lets Talk</h2>
            </div>
            <Floating />
            <ScrollToTop smooth color="#B534B0" />
        </div>
    )
}

export default Contact;