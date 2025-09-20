import { Text, View, Image, SafeAreaView } from "react-native";
import tw from "../../tailwind";
import Button from "../../(components)/Button.jsx";
import ProgressBar from "../../(components)/ProgressBar";
import { useRouter } from "expo-router";

export default function StepFifth() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-800`}>
      {/* Top Section with Logo and Doctor Image */}
      <View style={tw`bg-teal-500 w-full min-h-90 relative rounded-b-full pb-8 pt-12 px-6 justify-center items-center`}>
        {/* Logo */}
        <Image 
          source={require("../../../assets/logo.png")} 
          style={tw`w-4/5 h-40 absolute top-5`}
          resizeMode="cover"
        />
        
        {/* Doctor Image */}
        <Image 
          source={require("../../../assets/success3.png")} 
          style={tw`w-full h-120 absolute -bottom-35`}
          resizeMode="cover"
        />
      </View>

      {/* Middle Section with Text and Progress */}
      <View style={tw`flex-1 bg-gray-800 px-6 pt-8`}>
        <View style={tw`items-center mb-8`}>
          <Text style={tw`text-white text-3xl font-bold text-center mb-2`}>
            Congratulations
          </Text>
          
          {/* Progress Bar */}
          <View style={tw`w-full px-4 my-3`}>
            <ProgressBar 
              currentStep={3} 
              totalSteps={3}
              tw="w-32 mx-auto"
              activeColor="#50B8C3"
              inactiveColor="#6C757D"
            />
          </View>
        </View>
      </View>

      {/* Bottom Section with Button */}
      <View style={tw`px-6 pb-8`}>
        <Button 
          title="Let's Make a Journey" 
          onPress={() => router.push("/")}
        />
      </View>
    </SafeAreaView>
  );
}
