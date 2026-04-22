import React, { useState } from 'react';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ContactsScreen from './src/screens/ContactsScreen';

export default function App() {
  const [screen] = useState<'register' | 'contacts'>('register');

  if (screen === 'register') {
    return <RegistrationScreen />;
  }

  return <ContactsScreen />;
}