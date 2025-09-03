import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Input from "../../(components)/Input.jsx";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    university: "",
    yearOfStudy: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = () => {
    // Validate form data
    if (
      !formData.email ||
      !formData.password ||
      !formData.repeatPassword ||
      !formData.university ||
      !formData.yearOfStudy
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    router.push("/SignUp/StepOne")
    console.log("Form Data:", formData);
  };

  const handleLogin = () => {
    router.push("/SignIn");
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-gray-900`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`flex-grow`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`px-6 pt-4 pb-20`}>
          {/* Header Section */}
          <View style={tw`items-center mb-8`}>
            {/* Logo */}
            <Image
              source={require("../../../assets/logo.png")}
              style={tw`w-52 h-52`}
              resizeMode="contain"
            />
            {/* Welcome Message */}
            <Text style={tw`text-white text-center text-8 leading-8`}>
              Bienvenue à notre{"\n"}communauté
            </Text>
          </View>

          {/* Registration Form Card */}
          <View style={tw`bg-gray-800 rounded-t-3xl px-6 pt-8 pb-6`}>
            {/* Form Title */}
            <Text style={tw`text-white text-xl font-semibold mb-8`}>
              Register
            </Text>

            {/* Form Fields */}
            <View style={tw`space-y-6`}>
              {/* Email Field */}
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(value) => handleInputChange("email", value)}
              />

              {/* Password Field */}
              <Input
                placeholder="Password"
                secureTextEntry={!showPassword}
                rightIcon={showPassword ? "eye-off" : "eye"}
                onRightIconPress={() => setShowPassword(!showPassword)}
                value={formData.password}
                onChangeText={(value) => handleInputChange("password", value)}
              />

              {/* Repeat Password Field */}
              <Input
                placeholder="Repeat Password"
                secureTextEntry={!showRepeatPassword}
                rightIcon={showRepeatPassword ? "eye-off" : "eye"}
                onRightIconPress={() =>
                  setShowRepeatPassword(!showRepeatPassword)
                }
                value={formData.repeatPassword}
                onChangeText={(value) =>
                  handleInputChange("repeatPassword", value)
                }
              />

              {/* University Field */}
              <Input
                placeholder="University"
                autoCapitalize="words"
                value={formData.university}
                onChangeText={(value) => handleInputChange("university", value)}
              />

              {/* Year of Study Field */}
              <Input
                placeholder="year of study"
                keyboardType="numeric"
                value={formData.yearOfStudy}
                onChangeText={(value) =>
                  handleInputChange("yearOfStudy", value)
                }
              />
            </View>

            {/* Register Button */}
            <TouchableOpacity
              style={tw`bg-teal-500 rounded-xl py-4 mt-8 mb-2`}
              activeOpacity={0.8}
              onPress={handleRegister}
            >
              <Text style={tw`text-white text-center text-lg font-semibold`}>
                Register
              </Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={tw`items-center pt-1`}>
              <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
                <Text style={tw`text-white text-base`}>
                  Have an account?{" "}
                  <Text style={tw`text-teal-500 font-semibold`}>Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
