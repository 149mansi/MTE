import { AppState, Platform } from 'react-native';
import { useEffect } from 'react';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabaseAnonKey, supabaseUrl } from '../constants';

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