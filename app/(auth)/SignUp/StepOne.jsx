import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../(components)/Button";
import SelectButton from "../../(components)/SelectButton";
import tw from "../../tailwind";

export default function StepOne() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Medecine");
  const router = useRouter();
  const specialties = [
    "Medecine",
    "Medecine Dentaire", 
    "Pharmacie"
  ];

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleNextPress = () => {
    // router.push("/SignUp/StepTwo");
    router.push("/SignUp/StepTwo");
  };

  return (
    <View style={tw`flex-1 bg-[#1A1A1A]`}>
      {/* Header Section */}
      <View style={tw`bg-[#00D4AA] h-70 rounded-b-full justify-center items-center mb-10`}>
        <Text style={tw`text-white text-2xl font-bold text-center`}>
          Choose Your Speciality
        </Text>
      </View>

      {/* Specialty Selection Section */}
      <View style={tw`flex-1 px-5 pb-10`}>
        {specialties.map((specialty) => (
          <SelectButton
            key={specialty}
            title={specialty}
            isSelected={selectedSpecialty === specialty}
            onPress={() => handleSpecialtySelect(specialty)}
          />
        ))}

        {/* Spacer */}
        <View style={tw`flex-1`} />

        {/* Next Button */}
        <Button
          title="Next"
          onPress={handleNextPress}
        />
      </View>
    </View>
  );
}
