import "./Home.css";
import heart from "../images/heart.svg";
import comet from "../images/comet.svg";
import computer from "../images/computer.svg";
import folder from "../images/folder.svg";
import rabbit from "../images/rabbit.svg";
import pressStart from "../images/press_start.svg";
import instagram from "../images/instagram.svg";

function Home() {
    return (
        <div className="home-container">
            <a href="#hot-issue">
                <img src={heart} className="heart"/>
            </a>
            <a href="#new-friends">
                <img src={comet} className="comet"/>
            </a>
            <a href="#desire">
                <img src={computer} className="computer"/>
            </a>
            <a href="#what-is">
                <img src={folder} className="folder"/>
            </a>
            <a href="#who">
                <img src={rabbit} className="rabbit"/>
            </a>
            <a href="https://moaform.com/q/lelB1v" target="_blank">
                <img src={pressStart} className="press-start"/>
            </a>
            <a href="https://www.instagram.com/lenae_yi" target="_blank">
                <img src={instagram} className="instagram"/>
            </a>
        </div>
    )
}

export default Home