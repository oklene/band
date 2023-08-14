import './Desire.css';
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";

function Desire() {
    const navigate = useNavigate();
    
    return (
        <div className="desire-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
        </div>
    )
};

export default Desire;