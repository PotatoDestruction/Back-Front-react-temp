import { useState, useEffect } from "react";

const Home = () => {
   const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8079/v1/users')
        .then(res => res.json())
        .then(res => setUsers(res))
        .catch(error => console.log(error));
    }, [])
    return(
        <div>
            Home

            {users && console.log(users)}
        </div>
    )
}

export default Home;