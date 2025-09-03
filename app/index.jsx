import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Loader from "./(components)/loaders/Loader.jsx";
import tw from "./tailwind.js";
export default function App() {
  const [isLoged, setIsLoged] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoged(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoged === null) return <Loader />;
  if (!isLoged) return <Redirect href="/(auth)/SignUp/StepOne" />;
  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-900`}>
      <Text style={tw`text-white font-bold`}>Hello Tailwind with twrnc!</Text>
    </View>
  );
}
