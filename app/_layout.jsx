import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { useRoute } from '@react-navigation/native'
import { getUserData } from '../services/userService'

const _layout=()=>{
  return(
    <AuthProvider>
      <Mainlayout/>
    </AuthProvider>
  )
}

const Mainlayout = () => {
  const {setAuth,setUserData}=useAuth();
  const router = useRouter();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session user:',session?.user?.id);

      if (session) {
        // set auth
        setAuth(session?.user);
        updateUserData(session?.user);
        // move to home screen
        router.replace('/home');
        
      }
      else{
        // set auth null
        setAuth(null);
        // move to welcome screen
        router.replace('/welcome');
      }
    })
  },[])
  const updateUserData = async (user) => {
    let res = await getUserData(user?.id);
    if(res.error) setUserData(res.data);
  }
  return (
    <Stack
        screenOptions={{
            headerShown:false
        }}
    />
  )
}

export default _layout