import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../tailwind";

export default function NotificationContainer({ 
  title, 
  description, 
  timestamp, 
  onPress 
}) {
  return (
    <TouchableOpacity onPress={onPress} style={tw`mb-4`}>
      <View style={tw`flex-row items-start`}>
        {/* Bell Icon */}
        <View style={tw`mr-3 mt-1`}>
          <Ionicons name="notifications" size={20} color="#00D4AA" />
        </View>
        
        {/* Content */}
        <View style={tw`flex-1`}>
          <Text style={tw`text-white text-base font-bold mb-1`}>
            {title}
          </Text>
          <Text style={tw`text-gray-400 text-sm leading-5`}>
            {description}
          </Text>
        </View>
        
        {/* Timestamp */}
        <Text style={tw`text-gray-500 text-xs ml-2`}>
          {timestamp}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
