import React, {useState} from "react";

const ProfileComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(("USER"))));


    return (
        <>
            {user.phone}
        </>
    );
}

export default ProfileComponent;