import './NewFriends.css';
import back from "../images/back.svg";
import newFriends from "../images/new_friends.png";
import { useNavigate } from "react-router-dom";

function NewFriends() {
    const navigate = useNavigate();
    
    return (
        <div className="new-friends-container">
            <img src={back} className="back" onClick={() => navigate(-1)}/>
            <img src={newFriends} className="new-friends"/>
        </div>
    )
};

export default NewFriends;