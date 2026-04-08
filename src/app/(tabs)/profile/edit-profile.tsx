import React from "react";
import { Text, View } from "react-native";

export default function EditProfile() {
  return (
    <View className="min-h-[50vh] px-4 pt-4">
      <Text className="text-3xl font-bold">Edit Profile</Text>
      {[1, 2, 3, 4].map((d) => (
        <View
          key={d}
          className="w-full flex flex-row justify-between mt-2 px-2 py-4 bg-pink-400 rounded-md"
        >
          <Text className="text-2xl font-extrabold">{d}.</Text>
          <Text className="text-2xl">Ett eller annet</Text>
        </View>
      ))}
    </View>
  );
}
