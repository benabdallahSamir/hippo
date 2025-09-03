import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import NotificationContainer from "./(components)/NotificationContainer";
import tw from "./tailwind";

export default function Notification() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("send");

  const notifications = [
    {
      id: 1,
      title: "Un Nouveau Cours Ajouté",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1 min ago"
    },
    {
      id: 2,
      title: "Nod ta9ra ! 9areb examen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "10 min ago"
    },
    {
      id: 3,
      title: "Bacterial Biology Overview",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1 hour ago"
    },
    {
      id: 4,
      title: "Cours Introduction Génétique",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1 hour ago"
    },
    {
      id: 5,
      title: "Mendelian Genetics & Mechanisms of Heredity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1 hour ago"
    },
    {
      id: 6,
      title: "Metabolic Biochemistry for High School",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "1 hour ago"
    }
  ];

  const handleBackPress = () => {
    Alert.alert("Back Button", "Back button clicked!");
    router.back();
  };

  const handleNotificationPress = (notification) => {
    Alert.alert("Notification", `${notification.title} clicked!`);
  };

  // Removed handleAskToEdit as per instruction

  return (
    <View style={tw`flex-1 bg-[#1A1A1A]`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4 pt-12 bg-[#1A1A1A]`}>
        <TouchableOpacity onPress={handleBackPress} style={tw`mr-4`}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xl font-bold flex-1 text-center`}>
          Notifications
        </Text>
      </View>

      {/* Notifications List */}
      <ScrollView 
        style={tw`flex-1 px-4`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-24`}
      >
        {notifications.map((notification) => (
          <NotificationContainer
            key={notification.id}
            title={notification.title}
            description={notification.description}
            timestamp={notification.timestamp}
            onPress={() => handleNotificationPress(notification)}
          />
        ))}
      </ScrollView>
      {/* Footer section with button and its function has been deleted */}
    </View>
  );
}
