// import { Image,View, Text, StyleSheet, Pressable} from 'react-native'
// import React from 'react'
// import ScreenWrapper from '../components/screenWrapper'
// import { StatusBar } from 'expo-status-bar'
// import { wp } from '../helpers/common'
// import { hp } from '../helpers/common'
// import { theme } from '../constants/theme'
// import Button from '../components/Button'
// import {useRouter} from 'expo-router'

// const welcome = () => {
//   const router = useRouter(); 
//   return (
//     <ScreenWrapper bg="white">
//       <StatusBar style="dark"/>
//       <View style={styles.container}>
//       {/* welcome Image */}
//       <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')}/>

// {/* title */}
//       <View style={{gap:10}}>
//       <Text style={styles.title}>MTE Builder</Text>
//       <Text style={styles.punchline}>Streamlining your Monthly Thinking Exercises into success</Text>

//       </View>
//       {/* footer */}
//       <View style={styles.footer}>
//       <Button 
//         title="Getting Started"
//         buttonStyle={{marginHorizontal:wp(3)}}
//         onPress={()=>router.push('signup')}
//       />

//       <View style={styles.bottomTextContainer}>
//       <Text style={styles.loginText}>
//         Already have an account?  
//       </Text>
//       <Pressable onPress={()=>router.push('login')}>
//         <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Login</Text>
//       </Pressable>

//       </View>



//       </View>

//       </View>

//     </ScreenWrapper>
//   )
// }

// export default welcome

// const styles = StyleSheet.create({
//    container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         backgroundColor: 'white',
//         marginHorizontal:wp(4)
        
//     },
//     welcomeImage:{
//         width:wp(100),
//         height:hp(30),
//         alignSelf:'center'
//     },
//     title:{
//         color:theme.colors.text,
//         fontSize:hp(4),
//         textAlign:'center',
//         fontWeight: theme.fonts.extraBold
//     },
//     punchline:{
//         textAlign:'center',
//         paddingHorizontal:wp(10),
//         fontSize:hp(1.7),
//         color:theme.colors.text
//     },
//     footer:{
//         gap:30,
//         width:'100%',
//     },
//     bottomTextContainer:{
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         gap:5
//     },
//     loginText:{
//       textAlign:'center',
//         color:theme.colors.text,
//         fontSize:hp(1.6)
//     }
// })



import { Image, View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { StatusBar } from 'expo-status-bar';
import { wp } from '../helpers/common';
import { hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

const Welcome = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking session:", error.message);
        setLoading(false);
        return;
      }

      const currentSession = data.session;
      setSession(currentSession);
      setLoading(false);

      // ✅ Auto-redirect to /home if already logged in
      if (currentSession) {
        router.replace('/home');
      }
    };

    checkSession();
  }, []);

  const handleGetStarted = () => {
    if (session) {
      router.push('/home');
    } else {
      Alert.alert("Please login or sign up before proceeding.");
    }
  };

  if (loading) return null; // or a loading screen/spinner

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require('../assets/images/welcome.png')}
        />

        <View style={{ gap: 10 }}>
          <Text style={styles.title}>MTE Builder</Text>
          <Text style={styles.punchline}>
            Streamlining your Monthly Thinking Exercises into success
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={handleGetStarted}
          />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push('login')}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: '100%',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
