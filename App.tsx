import { NavigationContainer } from '@react-navigation/native'

import Tabs from './src/navigation/tabs';
import { Router } from './src/routes/Router';
import AuthProvider from './src/context/Auth';


export default function App() {
  return (
    <AuthProvider> 
      <Router />
    </AuthProvider>
  );
}
