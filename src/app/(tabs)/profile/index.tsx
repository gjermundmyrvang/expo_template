import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  const handleNavigate = () => {
    router.navigate("/profile/edit-profile");
  };

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 px-2 min-h-screen">
        {[1, 2, 3, 4].map((d) => (
          <View
            key={d}
            className="w-full flex flex-row justify-between mt-2 px-2 py-4 bg-slate-400 rounded-md"
          >
            <Text className="text-2xl font-extrabold">{d}.</Text>
            <Text className="text-2xl">Ett eller annet</Text>
          </View>
        ))}
        <View>
          <TouchableOpacity
            className="w-full bg-orange-400 py-4 rounded-full mt-4"
            onPress={handleNavigate}
          >
            <Text className="text-2xl text-center">Endre profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
