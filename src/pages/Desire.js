import './Desire.css';
import back from "../images/back.svg";
import desire from "../images/desire.png";
import { useNavigate } from "react-router-dom";

function Desire() {
    const navigate = useNavigate();
    
    return (
        <div className="desire-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
            <img src={desire} className="desire"/>
        </div>
    )
};

export default Desire;