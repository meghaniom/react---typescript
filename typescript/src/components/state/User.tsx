import { useState } from "react"

 type AuthUser = {
    name : string
    email : string
 }

const user  = () => {
    const [user, setUser] = useState < AuthUser | null>(null)

    const handelLogin = () =>{
        setUser({
            name:'om',
            email : 'om@gmail.com'
        })
    }
    const handelLogout = () => {
        setUser(null)
    }
    
    return (
        <div>
            <button onClick={handelLogin}>Login</button>
            <button onClick={handelLogout}>LogOut</button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </div>
    )
}

 export  default user