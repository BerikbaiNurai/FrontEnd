import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function RegistrationScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setForm({ ...form, email: text });

    if (!regex.test(text) && text.length > 0) {
      setErrors({ email: 'Invalid Student Email format' });
    } else {
      setErrors({ email: '' });
    }
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!errors.email && form.email && form.password) {
      console.log('Registration:', form);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <View style={styles.headerArea}>
            <Text style={styles.title}>Welcome Abroad</Text>
            <Text style={styles.subtitle}>
              Enter your details to register
            </Text>
          </View>

          {/* Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Askar Almatov"
              value={form.name}
              onChangeText={(t) => setForm({ ...form, name: t })}
            />
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>ALMAU Email</Text>
            <TextInput
              style={[
                styles.input,
                errors.email ? styles.inputError : null,
              ]}
              placeholder="id2024@almau.edu.kz"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={validateEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={form.password}
              onChangeText={(t) => setForm({ ...form, password: t })}
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            style={[
              styles.btn,
              (!form.email || !form.password || errors.email)
                ? styles.btnDisabled
                : null,
            ]}
            disabled={!form.email || !form.password || !!errors.email}
            onPress={handleRegister}
          >
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  scrollContent: {
    flexGrow: 1,
    padding: 30,
    justifyContent: 'center',
  },

  headerArea: { marginBottom: 40 },
  title: { fontSize: 32, fontWeight: '800' },
  subtitle: { color: '#666' },

  inputGroup: { marginBottom: 25 },
  label: { fontWeight: '600', marginBottom: 8 },

  input: {
    height: 55,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
  },

  inputError: {
    borderColor: '#dc3545',
    backgroundColor: '#fff8f8',
  },

  errorText: { color: '#dc3545', fontSize: 12 },

  btn: {
    backgroundColor: '#0066cc',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  btnDisabled: { backgroundColor: '#a0c4e4' },

  btnText: { color: '#fff', fontWeight: 'bold' },
});