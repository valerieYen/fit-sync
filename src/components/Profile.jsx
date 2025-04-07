import React, { useState } from "react";

function Profile() {

    const [isVisible, setIsVisible] = useState(false);

    function onPfpClick() {
        setIsVisible(true);
    }

    function hideWarning() {
        setIsVisible(false);
    }

    return(
        <div className="Profile SubPage">
            <div className="Spacer"></div>
            
            <h1>-User Profile-</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <button onClick={() => onPfpClick()}>
                <img alt="Profile pic" src="./buff_kitty.jpg" style={{width: "100px"}}></img>
            </button>
            <h3>Smiley J. Smile</h3>
            
            
            {isVisible &&
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", border: "2px solid yellow"}}>
                <h3><strong>Warning!</strong> Do not click on the profile image.</h3>
                <button onClick={() => hideWarning()}>
                    x
                </button>
            </div>
            }
            
            </div>


        </div>
    );
}

export default Profile;