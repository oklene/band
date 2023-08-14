import './Who.css';
import back from "../images/back.svg";
import who from "../images/who.svg";
import { useNavigate } from "react-router-dom";

function Who() {
    const navigate = useNavigate();
    
    return (
        <div className="who-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
            <img src={who} className="who"/>
        </div>
    )
};

export default Who;