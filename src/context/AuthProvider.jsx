import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"
// How to make Context and always make it outside the function
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    // Providing Data to......
    
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees} = getLocalStorage()
        setUserData({ employees})
    },[])



    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider

