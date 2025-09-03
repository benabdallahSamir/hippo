import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../(components)/Button";
import SelectButton from "../../(components)/SelectButton";
import tw from "../../tailwind";

export default function StepTwo() {
  const [selectedYear, setSelectedYear] = useState("Deuxieme Annee");
  const router = useRouter();
  const studyYears = [
    "Premiere Annee",
    "Deuxieme Annee",
    "Troisieme Annee",
    "Quatrieme Annee",
    "Cinquieme Annee",
    "Sixieme Annee",
    "Interne / Resident"
  ];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleNextPress = () => {
    router.push("/SignUp/StepThree");
  };

  return (
    <View style={tw`flex-1 bg-[#1A1A1A]`}>
      {/* Header Section */}
      <View style={tw`bg-[#00D4AA] h-70 rounded-b-full justify-center items-center mb-10`}>
        <Text style={tw`text-white text-2xl font-bold text-center leading-[30px]`}>
          Select The Year You{'\n'}Study
        </Text>
      </View>

      {/* Year Selection Section */}
      <View style={tw`flex-1 px-5 pb-10`}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {studyYears.map((year) => (
            <SelectButton
              key={year}
              title={year}
              isSelected={selectedYear === year}
              onPress={() => handleYearSelect(year)}
            />
          ))}

          {/* Spacer */}
          <View style={tw`flex-1`} />

          {/* Next Button */}
          <Button
            title="Next"
            onPress={handleNextPress}
          />
        </ScrollView>
      </View>
    </View>
  );
}
