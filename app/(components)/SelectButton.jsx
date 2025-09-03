import { Text, TouchableOpacity } from "react-native";
import tw from "../tailwind";

export default function SelectButton({ 
  title, 
  isSelected = false, 
  onPress 
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw.style(
        `bg-[#2A2A2A] rounded-xl py-4 px-5 my-2 items-center justify-center`,
        isSelected ? `border border-[#00D4AA]` : `border-0`
      )}
    >
      <Text
        style={tw`text-white text-base font-medium`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
