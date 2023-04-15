import React, {useState, useEffect} from "react";
import UsersApiService from "../services/users-api.service";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const retrieveUsers = () => {
        UsersApiService.getAll()
            .then(response => {
                setUsers(response.data.content);
                console.log(response.data.content);
            })
            .catch(e => { console.log(e);});
    };

    useEffect(() => {
        retrieveUsers();
    }, [retrieveUsers]);

    return(
        <>
            {
                users.map( user => (
                    <h1>{user.name}</h1>
                ))
            }

        </>
    );
}

export default UsersList;