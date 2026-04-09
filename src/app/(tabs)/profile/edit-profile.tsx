import React from "react";
import { Text, View } from "react-native";

export default function EditProfile() {
  return (
    <View className="min-h-[50vh] px-4 pt-4">
      <Text className="text-3xl text-foreground font-bold">Edit Profile</Text>
      <View className="bg-card rounded-lg flex-1 justify-center items-center">
        <Text className="text-xl text-foreground">Something</Text>
      </View>
    </View>
  );
}
