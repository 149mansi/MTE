// import { View, Text } from 'react-native'
// import React, { useEffect } from "react";
// import { Stack, useRouter } from "expo-router";
// import { AuthProvider, useAuth } from "../contexts/AuthContext";
// import { AppDataProvider } from "../contexts/AppDataContext";
// import { supabase } from "../lib/supabase";
// import { getUserData } from "../services/userService";

// const _layout = () => {
//   return (
//     <AuthProvider>
//       <AppDataProvider>
//         <MainLayout />
//       </AppDataProvider>
//     </AuthProvider>
//   );
// };

// const MainLayout = () => {
//   const { setAuth, setUserData } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       async (_event, session) => {
//         console.log("session user:", session?.user?.id);

//         if (session) {
//           setAuth(session.user);
//           await updateUserData(session.user);
//           router.replace("/home");
//         } else {
//           setAuth(null);
//           router.replace("/welcome");
//         }
//       }
//     );

//     // Cleanup: Ensure proper unsubscription
//     return () => {
//       if (authListener && typeof authListener.unsubscribe === "function") {
//         authListener.unsubscribe();
//       }
//     };
//   }, []);

//   const updateUserData = async (user) => {
//     try {
//       const res = await getUserData(user?.id);
//       if (!res.error) setUserData(res.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// };

// export default _layout;






import React from 'react';  // Make sure React is imported
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { AppDataProvider } from '../contexts/AppDataContext';
import { supabase } from '../lib/supabase';
import { getUserData } from '../services/userService';

const LoadingScreen = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const _layout = () => {
  return (
    <AuthProvider>
      <AppDataProvider>
        <MainLayout />
      </AppDataProvider>
    </AuthProvider>
  );
};

const MainLayout = () => {
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();

  const updateUserData = React.useCallback(async (user) => {
    try {
      const res = await getUserData(user?.id);
      if (!res.error) {
        setUserData(res.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [setUserData]);

  React.useEffect(() => {
    let mounted = true;
    let authListener;

    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (mounted) {
          if (session) {
            setAuth(session.user);
            await updateUserData(session.user);
            router.replace('/home');
          } else {
            router.replace('/welcome');
          }
        }
      } catch (error) {
        console.error('Initial auth check failed:', error);
        if (mounted) {
          router.replace('/welcome');
        }
      }
    };

    initializeAuth();

    authListener = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;

      console.log('Auth state changed:', session ? 'Logged in' : 'Logged out');

      if (session) {
        setAuth(session.user);
        await updateUserData(session.user);
        router.replace('/home');
      } else {
        setAuth(null);
        setUserData(null);
        router.replace('/welcome');
      }
    });

    return () => {
      mounted = false;
      if (authListener?.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, [setAuth, router, updateUserData, setUserData]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;