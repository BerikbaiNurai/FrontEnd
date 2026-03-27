import React from 'react';
import { ScrollView } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <ScrollView>
      <ProfileCard
        name="Nuray"
        role="Frontend Developer"
        bio="React Native"
        avatar="https://i.pinimg.com/1200x/d1/8e/a7/d18ea7285c8f7a99fb4eb2c827d8b1ac.jpg"
      />

      <ContactSection />
    </ScrollView>
  );
}