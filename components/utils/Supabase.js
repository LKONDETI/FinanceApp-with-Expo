import 'react-native-url-polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsazeakbqxazhdtfnjlg.supabase.co';
const SUPABASE_KEY = 'SUPABASE_CLIENT_API_KEY'
// const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});