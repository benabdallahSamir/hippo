import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function Input({ 
  placeholder, 
  secureTextEntry = false, 
  rightIcon = null,
  onRightIconPress = null,
  ...props 
}) {
  return (
    <View style={tw`relative`}>
      <TextInput
        style={tw`text-white text-base py-3 border-b border-gray-600 focus:border-teal-400`}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity 
          style={tw`absolute right-0 top-3`}
          onPress={onRightIconPress}
        >
          <Ionicons name={rightIcon} size={20} color="#9CA3AF" />
        </TouchableOpacity>
      )}
    </View>
  );
}
