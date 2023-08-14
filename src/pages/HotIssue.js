import "./HotIssue.css";
import hotIssue from "../images/hot_issue.png";
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";

function HotIssue() {
    const navigate = useNavigate();

    return (
        <div className="hot-issue-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
            <img src={hotIssue} className="hot-issue"/>
        </div>
    )
};

export default HotIssue;