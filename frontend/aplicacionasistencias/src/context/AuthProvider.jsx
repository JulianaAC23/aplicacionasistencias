import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() =>{
        //verificar si hay un usuario en localStorage
        let storedUser = localStorage.getItem("userData");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    function login( formUser ){
        setUser( formUser );
        localStorage.setItem("userData", JSON.stringify(formUser));
    }

    function logout(){
        setUser(null);
        localStorage.removeItem("userData");
    }

  return (
    <AuthContext.Provider value={{login, logout, user, loading}}>
      { children }
    </AuthContext.Provider>
  )
}

//crear un propio hook, docente hook ..
// hook
export function useAuth(){
    return useContext(AuthContext);
}
