import { View } from "react-native";
import tw from "../tailwind";

export default function ProgressBar({ 
  currentStep, 
  totalSteps, 
  activeColor = "#000", 
  inactiveColor = "#6C757D",
  tw : tw2 = ""
}) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <View style={tw` h-2 bg-gray-500 rounded-full overflow-hidden ${tw2}`}>
      <View 
        style={[
          tw`h-full rounded-full`,
          { 
            width: `${progressPercentage}%`,
            backgroundColor: activeColor 
          }
        ]} 
      />
    </View>
  );
}
