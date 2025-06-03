import { useState } from "react"

const  LoggedIn = () =>
{
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const handelLogin  = () => {
        setIsLoggedIn(true)
    }

    const  handelLogout = () => {
        setIsLoggedIn(false)
    }

    return (
      <div>
        <button onClick={handelLogin}>Login</button>
        <button onClick={handelLogout}>Logout</button>

        <div>User is {isLoggedIn.length ? "Logged in" : "Logged out"}</div>
      </div>
    );
}
export default LoggedIn;
