import { useTheme } from "@/src/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Profile",
          headerLargeTitleEnabled: true,
          headerTransparent: true,
          headerRight: () => <HeaderRightItem />,
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetAllowedDetents: "fitToContents",
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",
          headerLargeTitleEnabled: true,
          headerTransparent: true,
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}

const HeaderRightItem = () => {
  const { colors } = useTheme();
  return (
    <Link href={"/profile/settings"}>
      <Ionicons name="cog" size={28} color={colors.foreground} />
    </Link>
  );
};
