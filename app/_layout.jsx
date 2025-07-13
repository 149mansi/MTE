// import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { AppDataProvider } from "../contexts/AppDataContext";
import { supabase } from "../lib/supabase";
import { getUserData } from "../services/userService";

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

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        console.log("session user:", session?.user?.id);

        if (session) {
          setAuth(session.user);
          await updateUserData(session.user);
          router.replace("/home");
        } else {
          setAuth(null);
          router.replace("/welcome");
        }
      }
    );

    // Cleanup: Ensure proper unsubscription
    return () => {
      if (authListener && typeof authListener.unsubscribe === "function") {
        authListener.unsubscribe();
      }
    };
  }, []);

  const updateUserData = async (user) => {
    try {
      const res = await getUserData(user?.id);
      if (!res.error) setUserData(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
