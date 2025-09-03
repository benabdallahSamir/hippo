import { Text, TouchableOpacity } from "react-native";
import tw from "../tailwind";

export default function Button({ 
  title, 
  onPress,
  disabled = false 
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={
        tw`rounded-xl py-4 px-5 my-2 items-center justify-center shadow-lg ${disabled ? "bg-gray-500" : "bg-teal-400"}`
      }
    >
      <Text style={tw`text-white text-lg font-semibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
