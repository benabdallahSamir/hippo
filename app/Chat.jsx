import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ReceivedMessage from "./(components)/chat/ReceivedMessage";
import SentMessage from "./(components)/chat/SentMessage";
import tw from "./tailwind";

export default function Chat() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "received",
      text: "Hello ! Yacine do you have any questions ?"
    },
    {
      id: 2,
      type: "sent",
      text: "C'est quoi l'hepatite"
    },
    {
      id: 3,
      type: "received",
      text: "L'hépatite est une inflammation du foie, généralement causée par une infection virale. Cependant, elle peut également être causée par des facteurs tels que la consommation excessive d'alcool, les toxines ou certaines maladies auto-immunes."
    },
    {
      id: 4,
      type: "sent",
      text: "les types de l'hepatite"
    },
    {
      id: 5,
      type: "received",
      text: "Il existe différentes formes d'hépatite virale, chacune causée par un virus spécifique : Hepatite A, B, C, D, E"
    },
    {
      id: 6,
      type: "sent",
      text: "les types de l'hepatite"
    },
    {
      id: 7,
      type: "sent",
      text: "les types de l'hepatite"
    },
    {
      id: 8,
      type: "sent",
      text: "les types de l'hepatite"
    }
  ]);

  const scrollViewRef = useRef();

  const handleBackPress = () => {
    router.back();
  };

  const handleSendMessage = () => {  
      Alert.alert("Message Sent", "Your message has been sent!");
    
  };

  const handleInputPress = () => {
    Alert.alert("Input Field", "Input field clicked!");
  };

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  return (
    <KeyboardAvoidingView 
      style={tw`flex-1 bg-[#1A1A1A]`}
      behavior={Platform.OS !== "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View style={tw`flex-row items-center p-4 pt-12 bg-[#1A1A1A]`}>
        <TouchableOpacity onPress={handleBackPress} style={tw`mr-4`}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xl font-bold flex-1 text-center`}>
          Hippo Chatbot
        </Text>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={tw`flex-1 px-4`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-4`}
      >
        {messages.map((msg) => (
          msg.type === "received" ? (
            <ReceivedMessage key={msg.id} message={msg.text} />
          ) : (
            <SentMessage key={msg.id} message={msg.text} />
          )
        ))}
      </ScrollView>

      {/* Input Section */}
      <View style={tw`p-4 bg-[#1A1A1A] border-t border-gray-700`}>
        <View style={tw`flex-row items-center`}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Write your message"
              placeholderTextColor="#9CA3AF"
            style={tw`flex-1 bg-white rounded text-gray-800 text-sm px-4 py-3 mr-3`}
              
              multiline
            />
          <TouchableOpacity 
            onPress={handleSendMessage}
            style={tw`bg-[#00D4AA] rounded-full w-12 h-12 items-center justify-center`}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
