import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import Input from '../(components)/Input';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    Alert.alert('Login', 'Login button clicked!');
  };

  const handleRegister = () => {
    // goto sign up first step page 
    router.push('/SignUp');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Forgot password link clicked!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView 
      style={tw`flex-1 bg-gray-900`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView 
        style={tw`flex-1`}
        contentContainerStyle={tw`flex-grow`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo and Welcome Section */}
        <View style={tw`flex-1 justify-center items-center px-8 pt-10`}>
          <Image 
            source={require('../../assets/logo.png')}
            style={tw`w-52 h-52`}
            resizeMode="contain"
          />          
          <Text style={tw`text-white text-[10] font-medium mb-12`}>Welcome Back,</Text>
        </View>

        {/* Login Form Section */}
        <View style={tw`bg-gray-800 rounded-t-3xl px-8 pt-8 pb-12 gap-4`}>
          <Text style={tw`text-white text-2xl font-bold mb-8`}>Login</Text>
          
          {/* Username Input */}
          <Input
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
          
          {/* Password Input */}
          <Input
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            rightIcon={showPassword ? "eye-off" : "eye"}
            onRightIconPress={togglePasswordVisibility}
          />
          
          {/* Forgot Password Link */}
          <TouchableOpacity 
            style={tw`items-end`}
            onPress={handleForgotPassword}
          >
            <Text style={tw`text-gray-400 text-sm`}>Forgot password?</Text>
          </TouchableOpacity>
          
          {/* Login Button */}
          <TouchableOpacity 
            style={tw`bg-teal-400 py-4 rounded-xl`}
            onPress={handleLogin}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>Login</Text>
          </TouchableOpacity>
          
          {/* Register Link */}
          <View style={tw`flex-row justify-center`}>
            <Text style={tw`text-gray-400 text-base`}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={tw`text-teal-400 text-base font-medium`}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

