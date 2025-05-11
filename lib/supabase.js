import { AppState } from 'react-native';
import { useEffect } from 'react';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabaseAnonKey, supabaseUrl } from '../constants';

// Initialize Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // React Native doesn't use URL sessions
  },
});



// Handle AppState Changes
const App = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      console.log('App state changed to:', state);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  return null;
};

export default App;
