import './WhatIs.css';
import back from "../images/back.svg";
import whatIs from "../images/what_is.svg";
import { useNavigate } from "react-router-dom";

function WhatIs() {
    const navigate = useNavigate();
    
    return (
        <div className="what-is-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
            <img src={whatIs} className="what-is"/>
        </div>
    )
};

export default WhatIs;