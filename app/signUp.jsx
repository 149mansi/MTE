import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { theme } from '../constants/theme';
import { wp, hp } from '../helpers/common';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
// Uncomment this if using a custom button
import Button from '../components/Button';
// import { Button } from 'react-native';
import Icon from '../assets/icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '../lib/supabase';

const SignUp = () => {
  const router = useRouter();
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert('SignUp', 'Please fill all the fields!');
      return;
    }
  
    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
  
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{
          name
        }
      }
    });
    setLoading(false);
    // console.log('session:',session);
    // console.log('error:',error);
  
    if (error) {
      Alert.alert('SignUp', error.message);
      return;
    }
  
    if (data?.user) {
      Alert.alert('SignUp', 'Account created successfully!');
      router.push('login'); // Navigate to the login screen
    }
  };
  
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        {/* Welcome Section */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        {/* Form Section */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create an account
          </Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your name"
            onChangeText={(value) => {
              nameRef.current = value;
            }}
          /> 
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
          />
          {/* Button */}
          {loading ? (
            <Text style={{ textAlign: 'center', color: theme.colors.text }}>
              Creating account...
            </Text>
          ) : (
            <Button title="Sign up" onPress={onSubmit} />
          )}
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('login')}>
            <Text
              style={[
                styles.footerText,
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
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
