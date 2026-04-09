import { ThemeSelector } from "@/src/components/theme-selector";
import React from "react";
import { ScrollView, Text } from "react-native";

export default function Settings() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-4 pt-12 pb-8"
    >
      <Text className="text-foreground text-xs font-semibold uppercase tracking-wider mb-2">
        Appearance
      </Text>
      <ThemeSelector />
    </ScrollView>
  );
}
