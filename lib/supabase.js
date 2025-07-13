import { AppState, Platform } from 'react-native';
import { useEffect } from 'react';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabaseAnonKey, supabaseUrl } from '../constants/index';

// 1. Platform-adaptive storage solution
const createSafeStorage = () => {
  if (typeof window === 'undefined') {
    // Node.js/SSR environment
    return {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };
  }


  return Platform.select({
    web: {

      
      getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
      setItem: (key, value) => Promise.resolve(window.localStorage.setItem(key, value)),
      removeItem: (key) => Promise.resolve(window.localStorage.removeItem(key)),
    },
    default: AsyncStorage, // iOS/Android
  });
};

// 2. Initialize Supabase with cross-platform support
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: createSafeStorage(),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web', // Only enable for web
  },
});

// 3. Enhanced AppState handling for session management
const handleAppStateChange = (state: string) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
};

// 4. Main App Component with Supabase session management
const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize session listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session);
    });

    // Handle app state changes
    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription?.unsubscribe();
      appStateSubscription.remove();
    };
  }, []);

  return children;
};

export default SupabaseProvider;


// import { AppState } from 'react-native'
// import 'react-native-url-polyfill/auto'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createClient, processLock } from '@supabase/supabase-js'

// const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL
// const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//     lock: processLock,
//   },
// })

// // Tells Supabase Auth to continuously refresh the session automatically
// // if the app is in the foreground. When this is added, you will continue
// // to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// // `SIGNED_OUT` event if the user's session is terminated. This should
// // only be registered once.
// AppState.addEventListener('change', (state) => {
//   if (state === 'active') {
//     supabase.auth.startAutoRefresh()
//   } else {
//     supabase.auth.stopAutoRefresh()
//   }
// })