import { Text, View } from "react-native";
import tw from "../../tailwind";

export default function ReceivedMessage({ message }) {
  return (
    <View style={tw`mb-3 max-w-[80%] self-start`}>
      <View style={tw`bg-white rounded-2xl rounded-tl-md px-4 py-3`}>
        <Text style={tw`text-gray-800 text-sm leading-5`}>
          {message}
        </Text>
      </View>
    </View>
  );
}
