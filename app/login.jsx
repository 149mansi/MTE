// import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
// import React, { useRef, useState } from 'react';
// import ScreenWrapper from '../components/screenWrapper'; // Default export
// import { theme } from '../constants/theme'; // Ensure this is exported
// import { wp, hp } from '../helpers/common'; // Ensure 'wp' and 'hp' are exported
// import BackButton from '../components/BackButton'; // Default export
// import Input from '../components/Input';
// import Button from '../components/Button'; // Correct import for the custom Button
// import Icon from '../assets/icons'; // Check export type
// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { supabase } from '../lib/supabase';

// const Login = () => {
//   const router = useRouter();
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async () => {
//     if (!emailRef.current || !passwordRef.current) {
//       Alert.alert('Login', "Please fill all the fields!");
//       return;
//     }

//     const email = emailRef.current.trim();
//     const password = passwordRef.current.trim();

//     try {
//       setLoading(true); // Start loading
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         Alert.alert('Login Failed', error.message);
//         setLoading(false);
//         return;
//       }

//       Alert.alert('Login Successful!', 'Welcome back!');
//       router.push('home'); // Navigate to home
//     } catch (err) {
//       console.error(err);
//       Alert.alert('Login Error', 'An unexpected error occurred.');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <ScreenWrapper bg="white">
//       <StatusBar style="dark" />
//       <View style={styles.container}>
//         <BackButton router={router} />
//         {/* Welcome Section */}
//         <View>
//           <Text style={styles.welcomeText}>Hey,</Text>
//           <Text style={styles.welcomeText}>Welcome Back</Text>
//         </View>
//         {/* Form Section */}
//         <View style={styles.form}>
//           <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
//             Please login to continue
//           </Text>
//           <Input
//             icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
//             placeholder="Enter your email"
//             onChangeText={(value) => {
//               emailRef.current = value;
//             }}
//           />
//           <Input
//             icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
//             placeholder="Enter your Password"
//             secureTextEntry
//             onChangeText={(value) => {
//               passwordRef.current = value;
//             }}
//           />
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           {/* Button */}
//           <Button title={'Login'} loading={loading} onPress={onSubmit} />
//         </View>
//         {/* Footer */}
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>Don't have an account?</Text>
//           <Pressable onPress={() => router.push('signUp')}>
//             <Text
//               style={[
//                 styles.footerText,
//                 {
//                   color: theme.colors.primaryDark,
//                   fontWeight: theme.fonts.semibold,
//                 },
//               ]}
//             >
//               Sign Up
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 45,
//     paddingHorizontal: wp(5),
//   },
//   welcomeText: {
//     fontSize: hp(4),
//     fontWeight: theme.fonts.bold,
//     color: theme.colors.text,
//   },
//   form: {
//     gap: 25,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     fontWeight: theme.fonts.semibold,
//     color: theme.colors.text,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 5,
//   },
//   footerText: {
//     textAlign: 'center',
//     color: theme.colors.text,
//     fontSize: hp(1.6),
//   },
// });


// import { Alert, Pressable, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
// import React, { useRef, useState } from 'react';
// import ScreenWrapper from '../components/screenWrapper';
// import { theme } from '../constants/theme';
// import { wp, hp } from '../helpers/common';
// import BackButton from '../components/BackButton';
// import Input from '../components/Input';
// import Button from '../components/Button';
// import Icon from '../assets/icons';
// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { supabase } from '../lib/supabase';

// const Login = () => {
//   const router = useRouter();
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const onSubmit = async () => {
//     const email = emailRef.current.trim();
//     const password = passwordRef.current.trim();

//     // Validation
//     if (!email || !password) {
//       Alert.alert('Login', "Please fill all the fields!");
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address');
//       return;
//     }

//     if (password.length < 6) {
//       Alert.alert('Invalid Password', 'Password must be at least 6 characters');
//       return;
//     }

//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         Alert.alert('Login Failed', error.message);
//         return;
//       }

//       // Login successful
//       Alert.alert('Login Successful!', 'Welcome back!');
//       router.replace('home'); // Using replace instead of push to prevent going back to login
//     } catch (err) {
//       console.error('Login error:', err);
//       Alert.alert(
//         'Login Error',
//         typeof err.message === 'string' 
//           ? err.message 
//           : 'An unexpected error occurred. Please try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScreenWrapper bg="white">
//       <StatusBar style="dark" />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1 }}
//       >
//         <View style={styles.container}>
//           <BackButton router={router} />
          
//           {/* Welcome Section */}
//           <View>
//             <Text style={styles.welcomeText}>Hey,</Text>
//             <Text style={styles.welcomeText}>Welcome Back</Text>
//           </View>
          
//           {/* Form Section */}
//           <View style={styles.form}>
//             <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
//               Please login to continue
//             </Text>
            
//             <Input
//               icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               onChangeText={(value) => {
//                 emailRef.current = value;
//               }}
//             />
            
//             <Input
//               icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
//               placeholder="Enter your Password"
//               secureTextEntry={!showPassword}
//               onChangeText={(value) => {
//                 passwordRef.current = value;
//               }}
//               rightIcon={
//                 <Pressable onPress={() => setShowPassword(!showPassword)}>
//                   <Icon 
//                     name={showPassword ? "eye-off" : "eye"} 
//                     size={22} 
//                     strokeWidth={1.6}
//                   />
//                 </Pressable>
//               }
//             />
            
//             <Pressable onPress={() => router.push('forgot-password')}>
//               <Text style={styles.forgotPassword}>Forgot Password?</Text>
//             </Pressable>
            
//             {/* Button */}
//             <Button 
//               title={'Login'} 
//               loading={loading} 
//               onPress={onSubmit}
//               disabled={loading}
//             />
//           </View>
          
//           {/* Footer */}
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account?</Text>
//             <Pressable onPress={() => router.push('signUp')}>
//               <Text
//                 style={[
//                   styles.footerText,
//                   {
//                     color: theme.colors.primaryDark,
//                     fontWeight: theme.fonts.semibold,
//                   },
//                 ]}
//               >
//                 Sign Up
//               </Text>
//             </Pressable>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </ScreenWrapper>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 45,
//     paddingHorizontal: wp(5),
//     paddingTop: hp(2),
//   },
//   welcomeText: {
//     fontSize: hp(4),
//     fontWeight: theme.fonts.bold,
//     color: theme.colors.text,
//   },
//   form: {
//     gap: 25,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     fontWeight: theme.fonts.semibold,
//     color: theme.colors.text,
//     fontSize: hp(1.6),
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 5,
//   },
//   footerText: {
//     textAlign: 'center',
//     color: theme.colors.text,
//     fontSize: hp(1.6),
//   },
// });


// import {
//   Alert,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import React, { useRef, useState } from 'react';
// import ScreenWrapper from '../components/screenWrapper';
// import { theme } from '../constants/theme';
// import { wp, hp } from '../helpers/common';
// import BackButton from '../components/BackButton';
// import Input from '../components/Input';
// import Button from '../components/Button';
// import Icon from '../assets/icons';
// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { supabase } from '../lib/supabase';

// const Login = () => {
//   const router = useRouter();
//   const emailRef = useRef('');
//   const passwordRef = useRef('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const onSubmit = async () => {
//     const email = emailRef.current.trim();
//     const password = passwordRef.current.trim();

//     if (!email || !password) {
//       Alert.alert('Login', 'Please fill all the fields!');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address');
//       return;
//     }

//     if (password.length < 6) {
//       Alert.alert('Invalid Password', 'Password must be at least 6 characters');
//       return;
//     }

//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         Alert.alert('Login Failed', error.message);
//         return;
//       }

//       Alert.alert('Login Successful!', 'Welcome back!');
//       router.replace('home');
//     } catch (err) {
//       console.error('Login error:', err);
//       Alert.alert('Login Error', err?.message || 'An error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     const email = emailRef.current.trim();

//     if (!email) {
//       Alert.alert('Forgot Password', 'Please enter your email first.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address');
//       return;
//     }

//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.resetPasswordForEmail(email, {
//         redirectTo: 'https://your-app-name.supabase.co/auth/callback', // You can customize this later
//       });

//       if (error) {
//         Alert.alert('Error', error.message);
//       } else {
//         Alert.alert(
//           'Reset Email Sent',
//           'Check your email inbox to reset your password.'
//         );
//       }
//     } catch (err) {
//       Alert.alert('Error', 'An unexpected error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScreenWrapper bg="white">
//       <StatusBar style="dark" />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1 }}
//       >
//         <View style={styles.container}>
//           <BackButton router={router} />

//           <View>
//             <Text style={styles.welcomeText}>Hey,</Text>
//             <Text style={styles.welcomeText}>Welcome Back</Text>
//           </View>

//           <View style={styles.form}>
//             <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
//               Please login to continue
//             </Text>

//             <Input
//               icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               onChangeText={(value) => {
//                 emailRef.current = value;
//               }}
//             />

//             <Input
//               icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
//               placeholder="Enter your Password"
//               secureTextEntry={!showPassword}
//               onChangeText={(value) => {
//                 passwordRef.current = value;
//               }}
//               rightIcon={
//                 <Pressable onPress={() => setShowPassword(!showPassword)}>
//                   <Icon
//                     name={showPassword ? 'eye-off' : 'eye'}
//                     size={22}
//                     strokeWidth={1.6}
//                   />
//                 </Pressable>
//               }
//             />

//             <Pressable onPress={handleForgotPassword}>
//               <Text style={styles.forgotPassword}>Forgot Password?</Text>
//             </Pressable>

//             <Button
//               title={'Login'}
//               loading={loading}
//               onPress={onSubmit}
//               disabled={loading}
//             />
//           </View>

//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account?</Text>
//             <Pressable onPress={() => router.push('signUp')}>
//               <Text
//                 style={[
//                   styles.footerText,
//                   {
//                     color: theme.colors.primaryDark,
//                     fontWeight: theme.fonts.semibold,
//                   },
//                 ]}
//               >
//                 Sign Up
//               </Text>
//             </Pressable>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </ScreenWrapper>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 45,
//     paddingHorizontal: wp(5),
//     paddingTop: hp(2),
//   },
//   welcomeText: {
//     fontSize: hp(4),
//     fontWeight: theme.fonts.bold,
//     color: theme.colors.text,
//   },
//   form: {
//     gap: 25,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     fontWeight: theme.fonts.semibold,
//     color: theme.colors.text,
//     fontSize: hp(1.6),
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 5,
//   },
//   footerText: {
//     textAlign: 'center',
//     color: theme.colors.text,
//     fontSize: hp(1.6),
//   },
// });
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { theme } from '../constants/theme';
import { wp, hp } from '../helpers/common';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import Button from '../components/Button';
import Icon from '../assets/icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '../lib/supabase';

const Login = () => {
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onSubmit = async () => {
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    if (!email || !password) {
      Alert.alert('Login', 'Please fill all the fields!');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert('Login Failed', error.message);
        return;
      }

      Alert.alert('Login Successful!', 'Welcome back!');
      router.replace('home');
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Login Error', err?.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = emailRef.current.trim();

    if (!email) {
      Alert.alert('Forgot Password', 'Please enter your email first.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://your-app-name.supabase.co/auth/callback',
      });

      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert(
          'Reset Email Sent',
          'Check your email inbox to reset your password.'
        );
      }
    } catch (err) {
      Alert.alert('Error', 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <BackButton router={router} />

          <View>
            <Text style={styles.welcomeText}>Hey,</Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>

          <View style={styles.form}>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please login to continue
            </Text>

            <Input
              icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => {
                emailRef.current = value;
              }}
            />

            <Input
              icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              onChangeText={(value) => {
                passwordRef.current = value;
              }}
              rightIcon={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={22}
                    strokeWidth={1.6}
                  />
                </Pressable>
              }
            />

            <Pressable onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>

            <Button
              title={'Login'}
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text
                style={[
                  styles.footerText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
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
    fontSize: hp(1.6),
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
