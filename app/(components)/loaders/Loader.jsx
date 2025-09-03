import { ActivityIndicator, Text, View } from "react-native";
import tw from "../../tailwind.js";
export default function Loader() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <ActivityIndicator size="large" color="#1D4ED8" />
      <Text style={tw`text-gray-500 text-lg`}>Loading...</Text>
    </View>
  );
}
