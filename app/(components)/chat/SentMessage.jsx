import { Text, View } from "react-native";
import tw from "../../tailwind";

export default function SentMessage({ message }) {
  return (
    <View style={tw`mb-3 max-w-[80%] self-end`}>
      <View style={tw`bg-[#00D4AA] rounded-2xl rounded-tr-md px-4 py-3`}>
        <Text style={tw`text-white text-sm leading-5`}>
          {message}
        </Text>
      </View>
    </View>
  );
}
