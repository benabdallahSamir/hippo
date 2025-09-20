
import { Text, View, Image, SafeAreaView } from "react-native";
import tw from "../tailwind";
import Button from "../(components)/Button.jsx";
import { useRouter } from "expo-router";

export default function Error() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900`}>
      {/* Top Section with Logo and Doctor Image */}
      <View style={tw`bg-teal-500 w-full min-h-90 relative rounded-b-full pb-8 pt-12 px-6 justify-center items-center`}>
        {/* Logo */}
        <Image 
          source={require("../../assets/logo.png")} 
          style={tw`w-4/5 h-40 absolute top-5`}
          resizeMode="cover"
        />
        
        {/* Doctor Image */}
        <Image 
          source={require("../../assets/faild.png")} 
          style={tw`w-full h-120 absolute -bottom-35`}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section with Buttons */}
      <View style={tw`flex-1 bg-gray-900 px-6 pt-8 justify-end pb-8`}>
        <View style={tw`space-y-4`}>
          <Button 
            title="Réessayer" 
            onPress={() => router.push("/SignUp")}
          />
          <Button 
            title="Contacter Support" 
            onPress={() => router.push("/")}
            style={tw`bg-gray-700`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}