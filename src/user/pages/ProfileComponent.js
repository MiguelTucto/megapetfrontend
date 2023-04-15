import React, {useState} from "react";

const ProfileComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(("USER"))));


    return (
        <>
            <div>
                <h1>it works</h1>
                <h2>{user.name}</h2>
            </div>
        </>
    );
}

export default ProfileComponent;