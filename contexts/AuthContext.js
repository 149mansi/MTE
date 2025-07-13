// import { createContext, useContext, useState } from "react";

// const AuthContext=createContext();

// export const AuthProvider = ({children})=>{
//     const [user,setUser]=useState(null);

//     const setAuth = authUser=>{
//         setUser(authUser);

//     }
//     const setUserData = userData=>{
//         setUser({...userData});
//     }
//     return (
//         <AuthContext.Provider value={{user,setAuth,setUserData}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth = ()=> useContext(AuthContext);


// import { createContext, useContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import LoadingScreen from "../components/LoadingScreen"; // Adjust the import path as necessary
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const setAuth = async authUser => {
//         setUser(authUser);
//         await AsyncStorage.setItem("authUser", JSON.stringify(authUser));
//     };

//     const setUserData = userData => {
//         setUser(prev => ({ ...prev, ...userData }));
//     };

//     const logout = async () => {
//         setUser(null);
//         await AsyncStorage.removeItem("authUser");
//     };

//     useEffect(() => {
//         const initializeAuth = async () => {
//             const storedUser = await AsyncStorage.getItem("authUser");
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             }
//             setLoading(false);
//         };
//         initializeAuth();
//     }, []);

//     if (loading) {
//         return <LoadingScreen />; // Replace with your loading component
//     }

//     return (
//         <AuthContext.Provider value={{ user, setAuth, setUserData, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };






// import { createContext, useContext, useState, useEffect, useCallback } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     user: null,
//     loading: true
//   });

//   const setAuth = useCallback(async (authUser) => {
//     setAuthState(prev => ({
//       ...prev,
//       user: authUser
//     }));
//     if (authUser) {
//       await AsyncStorage.setItem("authUser", JSON.stringify(authUser));
//     } else {
//       await AsyncStorage.removeItem("authUser");
//     }
//   }, []);

//   const setUserData = useCallback((userData) => {
//     setAuthState(prev => ({
//       ...prev,
//       user: prev.user ? { ...prev.user, ...userData } : null
//     }));
//   }, []);

//   const logout = useCallback(async () => {
//     await AsyncStorage.removeItem("authUser");
//     setAuthState(prev => ({ ...prev, user: null }));
//   }, []);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem("authUser");
//         if (storedUser) {
//           setAuthState(prev => ({
//             ...prev,
//             user: JSON.parse(storedUser),
//             loading: false
//           }));
//         } else {
//           setAuthState(prev => ({ ...prev, loading: false }));
//         }
//       } catch (error) {
//         console.error("Auth initialization failed:", error);
//         setAuthState(prev => ({ ...prev, loading: false }));
//       }
//     };

//     initializeAuth();
//   }, []);

//   const value = {
//     user: authState.user,
//     loading: authState.loading,
//     setAuth,
//     setUserData,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };



import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useCallback, 
  useMemo 
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    loading: true,
    error: null
  });

  const setAuth = useCallback(async (authUser) => {
    try {
      setAuthState(prev => ({
        ...prev,
        user: authUser,
        error: null
      }));
      
      if (authUser) {
        await AsyncStorage.setItem("authUser", JSON.stringify(authUser));
      } else {
        await AsyncStorage.removeItem("authUser");
      }
    } catch (error) {
      console.error("Failed to set auth state:", error);
      setAuthState(prev => ({
        ...prev,
        error: error.message || "Failed to update authentication"
      }));
    }
  }, []);

  const setUserData = useCallback((userData) => {
    setAuthState(prev => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...userData } : null,
      error: null
    }));
  }, []);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("authUser");
      setAuthState(prev => ({ 
        ...prev, 
        user: null,
        error: null 
      }));
    } catch (error) {
      console.error("Failed to logout:", error);
      setAuthState(prev => ({
        ...prev,
        error: error.message || "Failed to logout"
      }));
    }
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("authUser");
        if (storedUser) {
          setAuthState(prev => ({
            ...prev,
            user: JSON.parse(storedUser),
            loading: false,
            error: null
          }));
        } else {
          setAuthState(prev => ({ 
            ...prev, 
            loading: false,
            error: null 
          }));
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: error.message || "Failed to initialize authentication"
        }));
      }
    };

    initializeAuth();
  }, []);

  const value = useMemo(() => ({
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    setAuth,
    setUserData,
    logout,
    isAuthenticated: !!authState.user
  }), [
    authState.user, 
    authState.loading, 
    authState.error,
    setAuth, 
    setUserData, 
    logout
  ]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};